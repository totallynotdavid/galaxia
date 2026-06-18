import type MarkdownIt from 'markdown-it'

// `:flag-xx:` → <img class="flag" src="/flags/xx.svg" ...>.
// VitePress applies the site `base` to the root-absolute path at HTML time.
// Unknown codes pass through as literal text (`:flag-zz:`).
export default function flagShortcode(md: MarkdownIt) {
    md.inline.ruler.after('emphasis', 'flag', (state, silent) => {
        const re = /:flag-([a-z]{2}):/g
        re.lastIndex = state.pos
        const m = re.exec(state.src)
        if (!m || m.index !== state.pos) return false
        if (silent) return true
        state.push('flag', '', 0).content = m[1]
        state.pos += m[0].length
        return true
    })

    md.renderer.rules.flag = (tokens, idx) => {
        const code = tokens[idx].content
        const title = `Bandera de ${code.toUpperCase()}`
        return (
            `<img class="flag" src="/flags/${code}.svg"` +
            ` alt="${title}" title="${title}" loading="lazy" decoding="async">`
        )
    }
}
