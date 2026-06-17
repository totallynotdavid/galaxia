---
title: Herramientas
description: Utilidades para administración, descarga, multimedia y productividad.
---

# Administración

## Almacenamiento en la nube

| Nombre | Funciones | Servidores disponibles | Sistemas operativos |
| --- | --- | --- | --- |
| [rclone](https://rclone.org/) | Sincroniza archivos y directorios entre distintos servidores usando líneas de comando.<br>Comprobación MD5/SHA1.<br>Solo copia de nuevos archivos.<br>Varias descargas consecutivas.<br>Encripción. | Box, Dropbox, FTP, Google Drive, Google Photos, HTTP, Hubic, Mega, Microsoft OneDrive, SFTP, WebDAV, el sistema de archivos local, entre otros. | Windows, macOS, Linux, `.deb`, `.rpm`, FreeBSD, NetBSD, OpenBSD, Plan9, Solaris. |
| [Almacenamiento ilimitado en Google Drive](https://github.com/stewartmcgown/uds) | Almacena ilimitadamente en Google Drive a través de Google Docs.<br>Descarga cualquier archivo almacenado.<br>Separa archivos binarios en Google Docs con texto codificado base64.<br>El tamaño del archivo final es más grande que el original 4:3. | Google Drive | Aplicación web (Universal) |

## Automatización

### Red entre pares y Usenet

| Nombre | Funciones | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [NZBHydra](https://github.com/theotherp/nzbhydra2/) `Metabuscador` | Metabuscador | `Desconocido` | Windows, Linux |
| [Sonarr](https://sonarr.tv/) | Descarga películas y series en versiones específicas cuando se encuentren disponibles.<br>Descarga automáticamente una nueva versión cuando esté disponible.<br>Monitoreo de varios canales RSS.<br>Calendario de estrenos. | `Sí` ([Código en Github](https://github.com/Sonarr/Sonarr)) | Linux, Windows, macOS |
| [Radarr](https://www.radarr.video/) | Descarga películas y series en versiones específicas cuando se encuentre disponibles.<br>Descarga automáticamente una nueva versión cuando esté disponible.<br>Calendario de estrenos.<br>Integración con software P2P.<br>Renombrado de archivos automático. | `Sí` ([Código bifurcado de Sonarr en Github](https://github.com/Radarr/Radarr)) | Linux, Windows, macOS |
| [SiCKRAGE](https://sickrage.ca/) `Administrador automático de videoteca de series de televisión` | Proveedor de torrents: SceneAccess, TorrentDay, Rarbg, entre otros.<br>Proveedor de `.nbz`: Bin Search, NZBs, Usenet-Crawler, NZBDog, entre otros.<br>Descarga automática de subtítulos usando los siguientes servidores: Addic7ed, OpenSubtitles, Popnapisi, TVSubtiles, entre otros.<br>Integrado con AniDB.<br>Calendario de estrenos. | `Desconocido` | Windows, Linux, OSX, Synology, entre otros. |
| [nefarious](https://lardbit.github.io/nefarious/) `Pretende combinar "[Sonarr](https://sonarr.tv/)", "[Radarr](https://www.radarr.video/)" y [Ombi](https://github.com/tidusjar/Ombi)` | Descarga películas y series en versiones específicas cuando se encuentre disponibles.<br>Descarga automáticamente una nueva versión cuando esté disponible.<br>Descubre nuevas películas y series de televisión (por popularidad, géneros, año, etc).<br>Evitar automáticamente la descarga de ciertos torrent.<br>Renombrado automático.<br>Múltiples lenguajes disponibles gracias a [The Movie Database (TMDb)](https://www.themoviedb.org/). | `Sí` ([Código abierto en Github](https://github.com/lardbit/nefarious)) | Linux, Windows, macOS |
| [Bazarr](https://www.bazarr.media/) `Complemento para "[Sonarr](https://sonarr.tv/)" y "[Radarr](https://www.radarr.video/)"` | Descarga subtítulos deseados tan pronto estén disponibles y actualiza en caso haya alguno nuevo disponible.<br>Búsqueda manual. | `Sí` ([Código abierto en Github](https://github.com/morpheus65535/bazarr)) | Linux, Windows, macOS |
| [Bonarr](https://github.com/klassicstudios/Bonarr) `Bifurcado de "[Radarr](https://www.radarr.video/)"` | Descarga películas pornográficas en versiones específicas cuando se encuentren disponibles.<br>Integración con SABnzbd y NZBGet.<br>Búsqueda manual. | `Sí` ([Código abierto en Github](https://github.com/klassicstudios/Bonarr)) | Windows, Linux, macOS, Raspberry Pi, entre otros. |
| [Lidarr](https://lidarr.audio/) `Bifucado de "[Sonarr](https://sonarr.tv/)"` | Calendario de estrenos.<br>Búsqueda de manual. | `Sí` ([Código abierto en Github](https://github.com/Lidarr/Lidarr)) | Linux, Windows, macOS |
| [Mylar](https://github.com/evilhero/mylar) | Descarga automáticamente cómics en formato `.cbr` o `.cbz` de `.nzb` y `.torrent`.<br>Funciona con SABnzbd, NZBGET y soporte para varios clientes torrent.<br>Calendario de estrenos de usuarios específicos o arcos narrativo. | `Sí`, disponible en [Github](https://github.com/evilhero/mylar). ¡Review the [fork](https://github.com/mylar3/mylar3)!<br>Está compilado en Python. | Estado: Alfa en 2019, no estable. |

## Contraseñas

| Nombre | Funciones | Código Abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [Bitwarden](https://bitwarden.com/) | Gestor de contraseñas y notas.<br>Generador de contraseñas. | `Sí`, en [Github](https://github.com/bitwarden) | Extensiones para navegadores (Chrome, Firefox, Safari, Vivaldi, Opera, Brave, Edge, Tor)<br>Aplicación web<br>Windows, macOS, Linux |

## Organización

| Nombre | Funciones | Formatos | Código Abierto | Sistemas operativos |
| --- | --- | --- | --- | --- |
| [Filebot](https://www.filebot.net/) `De pago` | Organizar y renombrar películas y series de televisión:<br>Información de [TheTVDB](https://thetvdb.com), [AniDB](https://anidb.net) o [TVmaze](http://www.tvmaze.com).<br>Revertir al nombre original usando historial interno o el nombre del torrent original.<br>Descargar y pegar subtítulos, previsualzación y solución de problemas al encodificar: OpenSubtitles, subir subtítulos junto al hash del video.<br>Descargar diseño ilustración o fotografía de una publicación.<br>Automatización disponible. | Archivos multimedia (pendiente) | No, solo posee una versión de pago. | Windows, macOS, Linux |
| [Picard](https://picard.musicbrainz.org/) | Organizar música incluso sin metadatos: a través de huella digital de audio (AcousticID).<br>Insertar metadatos.<br>Complementos disponibles. | `.mp3`, `flac`, `.ogg`, `.m4a`, `.wma`, `.wav`, entre otros. | `Sí`, disponible en [Github](https://github.com/musicbrainz/picard).<br>Escrito en Python. | Windows, macOS, Linux |
| [FFsubsync](https://github.com/smacke/ffsubsync) | Reordenar la sincronización de subtítulos.<br>Interfaz de líneas de comandos.<br>Escrito en lenguaje Python.<br>**Requerido:** FFmpeg, Python. | `.srt` | `Sí`, disponible en [Github](https://github.com/smacke/ffsubsync) | Windows, macOS, Linux |

## Red

### Control

| Nombre | Funciones | Sistemas operativos |
| --- | --- | --- |
| [NetLimiter](https://netlimiter.com/) | Control de tráfico de internet.<br>Herramienta de monitoreo de internet.<br>Bloquear conexión a ciertas aplicaciones.<br>Establecer cuotas límite para distintas aplicaciones. | Windows |

### Descarga de archivos

| Nombre | Funciones | Código Abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [qBittorrent](https://www.qbittorrent.org) | Cliente P2P.<br>Motor de búsqueda. | `Sí`, disponible en [Github](https://github.com/qbittorrent/qBittorrent).<br>Escrito en C++. | Windows, macOS, Linux, Unix |
| [uGet](https://ugetdm.com/) | Descarga multiconexión.<br>Monitoreo del portapapeles.<br>Descarga y unión del mismo archivo de varios servidores. | `Sí`, disponible en [SourceForge](https://sourceforge.net/p/urlget/uget2/ci/master/tree/) | Linux, Windows, BSD, Android |

## Hosting web

| Nombre | Características | Enlace |
| --- | --- | --- |
| 1&1 IONOS | Registro y gestión de dominios. | [Visitar](https://www.1and1.com/domaincheckresult) |
| Hosting24 | Dominio gratuito .com, .net, .org. | [Visitar](https://www.hosting24.com/free_domain.php) |
| Biz.nf | Dominio gratuito .com, .net, .org, .eu, .co.nf. | [Visitar](https://www.biz.nf/free-domain.php) |
| One.com | Dominios y alojamiento web. | [Visitar](https://www.one.com/es/) |
| 2FreeHosting | Hosting gratuito con cPanel, PHP, SSH y MySQL. | [Visitar](https://www.2freehosting.com/) |
| Ikoula | Hosting y servicios de cloud. | [Visitar](https://order.ikoula.com/sign_in.php) |
| Shinobi Sandbox | Sandbox japonés para pruebas web. | [Visitar](http://sandbox.shinobi.jp/manage/) |
| FC2 Web | Alojamiento web gratuito (1 GB). | [Visitar](http://web.fc2.com/en/?lang=en) |
| x2hosting | Hosting gratuito con PHP y MySQL. | [Visitar](http://x2hosting.ga/) |

# Multimedia

## Escritura

### Cuaderno de notas

| Nombre | Características | Código Abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [Roam Research](https://roamresearch.com/) `De pago` `Gratuito` | Simple y práctico.<br>Sincronización de notas.<br>Posee diversos atajos de teclado. | No | Aplicación web |
| [Manifest](https://www.manifest.app/) | Simple y práctico.<br>Anónimo y "seguro" (se almacena en el navegador de forma local).<br>Modo oscuro disponible. | `Sí`, disponible en [Github](https://github.com/jonathontoon/manifest/) | |

[Microtetha](https://notepad.microtheta.com/)

### Publicación

#### Plataformas

| Nombre | Características | Sistemas operativos | Adicional |
| --- | --- | --- | --- |
| [write.as](https://write.as/) | Simple y práctico.<br>Permite publicar en varios sitios a la vez: Tumblr, Ghost, Mastodon, Pleroma. | Aplicación web | Disponible en [Write Freely](https://writefreely.org/) como herramienta para instalar en un servidor. |

#### Asistentes para escribir: TRADUCCIÓN

| Nombre | Características | Sistemas operativos | Adicional |
| --- | --- | --- | --- |
| [DeepL](https://www.deepl.com/es/translator) `De pago` `Gratuito` | Lenguajes disponibles incluyen: **Inglés**, Español, **Alemán**, Chino, Francés, Portugués, Italiano, Polaco, Ruso, Neerlandés.<br>La versión gratuita tiene un límite de palabras (5000).<br>Traducción de documentos disponible. | Aplicación nativa para: Windows, macOS. | No disponible en Papago (¡PENDIENTE!) |

#### Asistentes para escribir: VARIOS

| Nombre | Características | Sistemas operativos |
| --- | --- | --- |
| [ASCIIFlow](https://asciiflow.com) | Crea tablas o cualquier cosa al estilo ASCII. | Aplicación web |

## Imágenes (PENDIENTE)

### Búsqueda inversa de imágenes

| Nombre | Características | Sitios compatibles |
| --- | --- | --- |
| [Image Operations](https://imgops.com/) | Pega o sube una imagen o enlace.<br>También puedes insertar `imgops.com/[]` para automatizar la búsqueda.<br>Edición básica de imágenes: Plataforma nativa, Pixlr, Picmonkey, Luna Pic, Szoter. | Imágenes de Google, Bing Images, Tinyeye, Karmadecay (Reddit), Yandex, Baidú, So (REVISAR), Sogou |
| [`EN`] [iqdb](https://iqdb.org) | Búsqueda de imágenes de series y películas de animación japonesas, incluyendo historietas japonesas (de adultos también). | PENDIENTE |

Más recursos:

- [`EN`] [Saucenao](https://saucenao.com/)
- [`JP`] [ASCCI2D](https://www.ascii2d.net)
- [`EN`] [trace.moe](https://trace.moe/)

### Metadatos

| Nombre | Información disponible |
| --- | --- |
| [Regex Info](http://exif.regex.info/) | EXIF/XMP/GPS.<br>Miniaturas ocultas.<br>Datos sobre la ubicación.<br>Modelo de la cámara.<br>Fecha, entre otros. |
| [Meta Pics](http://metapicz.com/) | Miniaturas ocultas.<br>Datos sobre la ubicación.<br>Modelo de la cámara.<br>Fecha, entre otros. |
| [Page Headers](https://pageheaders.com/) | Edad del archivo (imagen).<br>Tipo de archivo.<br>Tipo de hospedaje. |
| [Rex Swain's HTTP Viewer](http://www.rexswain.com/) | Edad del archivo (imagen).<br>Tipo de archivo.<br>Tipo de hospedaje. |

### Resolución de imágenes

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [Dynamic Drive](https://tools.dynamicdrive.com) | Muestra de varias versiones amplificadas de la imagen. | `No` | Aplicación web |
| [Waifu2x](http://waifu2x.udp.jp/) | Mejora la resolución de imágenes usando redes neuronales convolucionales.<br>Funciona mejor en imágenes de anime. | `Sí`, disponible en [Github](https://github.com/nagadomi/waifu2x) | Aplicación web |

#### Versiones bifurcadas de Waifu2x

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [`JP`] [`+`] [waifu-2x-cafee](https://github.com/lltcggie/waifu2x-caffe) GUI | **Requerido: GPU Nvidia**.<br>Disponible en varios idiomas: Inglés, Japonés, Chino simplificado, Chino tradicional, Coreano, Turco, Español, Francés. | `Sí`, disponible en [Github](https://github.com/lltcggie/waifu2x-caffe) | Windows Vista o superior. |
| [`EN`] [waifu2x ncnn vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan) | El autor recomienda usar GPU de marca Intel, AMD o Nvidia. | | |
| [`EN`] [waifu 2x, solo conversión](https://github.com/DeadSix27/waifu2x-converter-cpp) |  | | |
| [`EN`] [GUI](https://github.com/YukihoAA/waifu2x_snowshell) | Diferentes autores. | | |

### Búsqueda de tipografía

| Nombre | Características | Sistemas operativos |
| --- | --- | --- |
| [What the Font](https://www.myfonts.com/WhatTheFont/) | Reconocimiento de fuentes. | Web |
| [What Font Is](https://www.whatfontis.com/) | Reconocimiento de fuentes. | Web |

## Herramientas de Imagen

| Nombre | Características | Enlace |
| --- | --- | --- |
| Remove Background App | Elimina el fondo de imágenes. | [Visitar](https://removebackground.app/) |
| ClipDrop Image Upscaler | Mejora la resolución de imágenes con IA. | [Visitar](https://clipdrop.co/image-upscaler) |
| Ray.so | Imágenes de código con estilo. | [Visitar](https://ray.so/) |
| Screenshot Rocks | Herramienta de captura de pantalla basada en navegador. | [Visitar](https://screenshot.rocks/) |
| Draw.chat | Dibujo colaborativo con audio y video. | [Visitar](https://draw.chat/) |

## Hosting de Video

| Nombre | Características | Enlace |
| --- | --- | --- |
| Sendvid | Subir y compartir videos. | [Visitar](https://sendvid.com/) |

## Videos

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [FFmpeg](https://ffmpeg.org/) | Grabar, convertir y reproducir audio y video; entre otros. | `Sí`, disponible en [ffmpeg.org](https://git.ffmpeg.org/ffmpeg.git) | Windows, macOS, Linux |
| AV Converter | Convierte archivos con FFmpeg en línea. | [Visitar](https://av-converter.com/) |
| [HandBrake](https://handbrake.fr/) | Convierte videos de cualquier formato a casi cualquier formato.<br>Opciones preconfiguradas.<br>Formatos disponibles:<br>Contenedor de archivos: `.mp4` (`.m4v`) y `.mkv`.<br>Codificador de video: H.265 (x265 y QuickSync), H.264 (x264 y QuickSync), H.265 MPEG-4 y MPEG-2, VP8, VP9 y Theora.<br>Codificador de audio: `.aac`, `.he-aac`, `.mp3`, `.flac`, `.ac3` o Vorbis.<br>Adaptador de audio: `.ac-3`, `.e-ac3`, `.dts`, `.dts-hd`, TrueHD, `.aac` y pistas `.mp3`.<br>Subtítulos (VobSub, Closed Captions CEA-608, SSA, `.srt`).<br>Calidad constante o tasa de bits promedio del codificador del video.<br>Soporte para VFR y CFR.<br>Previsualización. | `Sí`, disponible en [Github](https://github.com/HandBrake/HandBrake) | Windows, macOS, Linux |

## Videojuegos

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [Goldberg Steam Simulator](https://gitlab.com/Mr_Goldberg/goldberg_emulator) | Emulador de las funciones en línea de Steam en LAN. | `Sí`, disponible en [Gitlab](https://gitlab.com/Mr_Goldberg/goldberg_emulator) | Windows, macOS, Linux |
| [Cream API](https://cs.rin.ru/forum/viewtopic.php?t=70576) | Desbloquear episodios descargables en Steam.<br>Funciona con todas las versiones conocidas de SteamApps (2 al 8).<br>Funciona con todas las versiones conocidas de SteamUser (9 al 20).<br>Funciona con videojuegos que hacen uso de `steamclient(64).dll`. |  |  |

# Descarga

## Aplicación nativa

### General

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [`EN`] [RipMeApp](https://github.com/RipMeApp/ripme) `Imágenes` | Requerido: Java.<br>[Lista](https://github.com/ripmeapp/ripme/wiki/Supported-Sites) completa de sitios soportados.<br>Descarga imágenes en grupo y videos.<br>Revisa direcciones en búsqueda de nuevas actualizaciones.<br>Lista en espera. | `Sí`, disponible en [Github](https://github.com/RipMeApp/ripme). | Windows, macOS, Linux |
| [`EN`] [gallery-dl](https://github.com/mikf/gallery-dl) `Imágenes` | **Requerido:** [Python](https://www.python.org/downloads/) 3.4+, [Requests](https://requests.readthedocs.io/en/master/), [youtube-dl](https://ytdl-org.github.io/youtube-dl/) para descarga de videos.<br>A través de la línea de comando.<br>Descargar galerías de imágenes y colecciones.<br>[Lista](https://github.com/mikf/gallery-dl/blob/master/docs/supportedsites.md) de sitios soportados. | `Sí`, disponible en [Github](https://github.com/mikf/gallery-dl) | Windows, macOS, Linux |
| [`EN`] [snscrape](https://github.com/JustAnotherArchivist/snscrape) `Redes sociales` | **Requerido:** Python 3.6+, libxml2, libxslt.<br>Búsqueda de perfiles usuario, hashtags, búsquedas en redes sociales.<br>Sitios soportados: Facebook, Gab, Instagram, Twitter, VKontakte, Sina Weibo. | `Sí`, disponible en [Github](https://github.com/JustAnotherArchivist/snscrape). | Windows, macOS, Linux |
| [`EN`] [Comics-DL](https://github.com/The-Eye-Team/Comics-DL) | Archivado de historietas.<br>Sitios soportados: [readcomicsonline.ru](https://readcomicsonline.ru/), [E-Hentai](https://e-hentai.org/), [My Reading Manga](https://myreadingmanga.info/), [Dounjins.com](https://doujins.com/), [NHentai](https://nhentai.net/), [Pururin](https://pururin.io/). | `Sí`, disponible en [Github](https://github.com/The-Eye-Team/Comics-DL) | Windows, macOS, Linux |
| [CheveretoDownloader](https://github.com/MandoCoding/CheveretoDownloader) | Descarga contenido de sitios. | `Sí`, disponible en [GitHub](https://github.com/MandoCoding/CheveretoDownloader) | Windows, macOS, Linux |
| [CyberDropDownloader](https://github.com/Jules-WinnfieldX/CyberDropDownloader) | Descarga contenido de CyberDrop. | `Sí`, disponible en [GitHub](https://github.com/Jules-WinnfieldX/CyberDropDownloader) | Windows, macOS, Linux |

### Archivado de sitios web

| Nombre | Características | Lenguaje | Código Abierto | Sistemas Operativos |
| --- | --- | --- | --- | --- |
| [Webrecorder](https://webrecorder.io/)<br>[Web Archiving Integration Layer](https://github.com/machawk1/wail) | **Archivado de sitios web en general.**<br>**Herramientas Incluidas:** [Heritrix 3.2.0](https://github.com/internetarchive/heritrix3), [OpenWayback 2.4.0](https://github.com/iipc/openwayback), Apache Tomcat, [PyInstaller](https://github.com/pyinstaller/pyinstaller/), [MemGator](https://github.com/oduwsdl/memgator). | Python | ✔️ Disponible en [GitHub](https://github.com/oduwsdl/memgator) | Windows, macOS |

### Específicos

| Nombre | Sitios soportados | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- | --- |
| [`EN`] [chimera](https://notabug.org/Aesir/chimera) | Necesario tener cuentas de pago para todos los servicios, excepto Deezer: Spotify, Deezer, Tidal, Qobuz, Soundcloud, Napster, Google Play Music (necesario tener un móvil conectado a internet). | Descarga música directamente desde servidores de pago.<br>Interfaz API disponible. | `Sí`, disponible en [Notabug](https://notabug.org/Aesir/chimera) | Windows, OSX (sin probar), Linux (sin probar), Android (sin probar), [guía](https://notabug.org/Aesir/chimera/wiki/Android) |
| [`EN`] [Crunchyroll Downloader](https://github.com/ThePBone/CrunchyrollDownloader) | Crunchyroll | Descarga episodios completos en `.mp4`.<br>Descarga listas de reproducción de emisión directa `.m3u` HLS.<br>Eliminar restricciones regionales (proxy nativo en Estados Unidos de América).<br>Filtrar episodios por series, temporadas y colecciones. | `Sí`, disponible en [Github](https://github.com/ThePBone/CrunchyrollDownloader). | Windows, macOS, Linux |
| [`EN`] [Deezloader Remix](https://notabug.org/RemixDevs/DeezloaderRemix) `Deezer` | Deezer | Descarga de forma directa de los servidores de Deezer.<br>Descarga en formato `.mp3` y `.flac`.<br>Busca y descubre música en la misma aplicación.<br>Descarga música directamente de un enlace URL.<br>Descarga la discografía de un artista.<br>Ve tu lista de reproducción pública en Deezer.<br>Archivos de música con metadatos (ID3 y comentarios Vorbis).<br>Implementación con las API de Spotify (sin servicios de terceros). | `Sí`, disponible en [Notabug](https://notabug.org/RemixDevs/DeezloaderRemix) | Windows, macOS, Linux |
| [`EN`] [GooBooDoo](https://github.com/vaibhavk97/GoBooDo) `Google Play Books` | Google Play Books | Descarga libros con vista previa disponible de Google Libros y proxys.<br>Compilado en Python, **requerido:** requests, bs4, Pillow, fpdf, html5lib. | `Sí`, disponible en [Github](https://github.com/vaibhavk97/GoBooDo) | Windows, macOS, Linux |
| [`EN`] [Raccoon](https://raccoon.onyxbits.de/) `Google Play Store` | Google Play Store | Desarrollado en Java.<br>Descarga `.apk` de los servidores de Google.<br>Evita bloqueos regionales.<br>Instala "split apk".<br>Descarga versiones anteriores `.apk`.<br>Simula un ambiente móvil muy específico (es necesario un dispositivo móvil y **adb**) y descargas específicas para un modelo específico Android. | No | Windows, macOS, Linux |
| [`EN`] [Megabasterd](https://github.com/tonikelope/megabasterd) `Mega` | [Mega](https://mega.nz) | Compilado en Java.<br>Evita los límites de los servidores de Mega.nz.<br>Interfaz de usuario pésimo.<br>Actualizaciones constantes. | `Sí`, disponible en [Github](https://github.com/tonikelope/megabasterd) | Windows, macOS, Linux |
| [`EN`] [Udeler GUI](https://github.com/FaisalUmair/udemy-downloader-gui) `Udemy` | Udemy | Necesario una cuenta de pago de Udemy.<br>Funciones: Calidad de video, varios cursos a la vez, pausar y continuar la descarga, escoge el directorio de descarga, multilenguaje (inglés, italiano y español). | `Sí`, disponible en [Github](https://github.com/FaisalUmair/udemy-downloader-gui) | Windows, macOS, Linux |

### Instagram

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [`EN`] [Instagram Scraper](https://github.com/dankmemes/instagram-scraper) | Compilado en Python.<br>Perfiles privados (siempre y cuando tengas acceso) o públicos.<br>Hashtags. | `Sí`, disponible en [Github](https://github.com/dankmemes/instagram-scraper) | Windows, macOS, Linux |
| [`EN`] [Instaloader](https://instaloader.github.io/) | Compilado en Python.<br>Perfiles privados (siempre y cuando tengas acceso) o públicos.<br>Historias, noticias, imágenes guardadas, descripción de publicaciones, comentarios, hashtag. | `Sí`, disponible en [Github](https://instaloader.github.io/) | Windows, macOS, Linux |
| [`EN`] [PyInstaLive](https://github.com/notcammy/PyInstaLive) | Compilado en Python.<br>Funciones: Transmisiones en vivo (también detecta transmisiones en vivo donde el usuario específico está de invitado), repeticiones guardadas de transmisiones en vivo, transmisiones en vivo y repetición de comentarios, transmisiones en vivo y repeticiones guardadas de las personas que sigues.<br>**Requisitos:** [ffmpeg](https://ffmpeg.org/download.html), [Git](https://git-scm.com/downloads), [Python 2.7.x or 3.5+](https://www.python.org/downloads/), [pip + setuptools](https://pip.pypa.io/en/stable/installing/). | `Sí`, disponible en [Github](https://github.com/notcammy/PyInstaLive) | Windows, macOS, Linux |
| [`EN`] [InstaLooter](https://github.com/althonos/InstaLooter) | Descargar cualquier video o imagen de un perfil de usuario sin hacer uso del API de Instagram.<br>**Requerido:** coloredlogs, dateutil, docopt, fs, requests, six, tenacity, tqdm, verboselogs. | `Sí`, disponible en [Github](https://github.com/althonos/InstaLooter) | Windows, macOS, Linux |

### Reddit

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [`EN`] [timesearch](https://github.com/voussoir/timesearch) | Archivado de subreddits.<br>**Requerido:** markdown, praw, voussoirkit. | `Sí`, disponible en [Github](https://github.com/voussoir/timesearch). | Windows, macOS, Linux |
| [`EN`] [Reddit Media Downloader](https://github.com/shadowmoose/RedditDownloader) | Escanear comentarios y entradas de distintos sitios de Reddit en búsqueda de imágenes o videos.<br>Ejemplos: lista de tus fotos a favor, lista de entradas guardadas, subreddits, multireddits de usuario.<br>Filtros de búsqueda: entradas con la palabra tal en el título con un mínimo de tantos votos a favor en tal subreddit. | `Sí`, disponible en [Github](https://github.com/shadowmoose/RedditDownloader) | Windows, macOS, Linux |

### Spotify

| Nombre | Características | Código abierto | Sistemas operativos |
| --- | --- | --- | --- |
| [`EN`] [Downtify Premium](https://github.com/Superhackman/downtify-premium) | Bifurcado de [Downtify](https://github.com/Shawak/downtify).<br>Necesario una cuenta de pago.<br>Funciones: descarga directamente de los servidores de Spotify, formato `.mp3`. | `Sí`, disponible en [Github](https://github.com/Superhackman/downtify-premium) | Desconocido |
| [`EN`] [XSpotify](https://github.com/meik97/XSpotify) | **Requerido:** Microsoft's [Visual C++ Redistributable Runtimes](https://github.com/abbodi1406/vcredist).<br>Descarga directamente de los servidores de Spotify.<br>Funciones: calidad y formato (cuenta gratuita) 160 kb/s, 32-bit, 44100 Hz `.ogg`; (cuenta premium) 320 kb/s, 32-bit, 44100 Hz `.ogg`. | `Sí`, disponible en [Github](https://github.com/meik97/XSpotify) | Windows |
| [`EN`] [SpotMyBackup](https://www.spotmybackup.com/) | Exporta e importa tu lista de reproducción y canciones de Spotify, pero tiene un repositorio en [Github](https://github.com/secuvera/SpotMyBackup/). | `No` | Aplicación web |

## Aplicación web

### General

#### Banco de imágenes

| Nombre | Características | Sitios Soportados |
| --- | --- | --- |
| [`EN`] [Downloader.la](https://downloader.la/) | Descarga imágenes sin marca de agua de varios bancos de imágenes. | Shutterstock, Adobe Stock, Getty Images, Picfair, lovePik, freePik, 123RF, entre otros. |
| [`EN`] [Tomato](https://tomato.to/) | Descarga imágenes sin marca de agua de varios bancos de imágenes. | Adobe Stock, Getty Images, 500px.com, Flickr, 123RF, Filmmagic, NBA Photostore, entre otros. |

#### Documentos

| Nombre | Sitios Soportados |
| --- | --- |
| [`EN`] [DocDownloader](https://docdownloader.com/) | Scribd, Issuu, Slideshare, Academia.edu |

### Generador de enlaces de descarga

[Lista completa](https://filehostlist.miraheze.org)

| Nombre | Sitios Soportados |
| --- | --- |
| reevown.com | Uploaded (1GB/H), Rapidgator (2 descargas por día), 1fichier, Filefactory, Uptobox, Uploadboy (1GB), K2S (1GB), Hyperdebrid.net |
| depositfiles | 3 enlaces/día, Rapidgator (0.5GB/día), Turbobit (0.5/día), Uploaded (1.5GB/día), Userscloud (1GB/día), Zippyshare (ilimitado), Cocoleech.com |
| Goloady | 5 enlaces/día, 300MB |
| Katfile | Ilimitado |
| Rapidgator | 0.5GB |
| Uploaded.net | 1GB |
| Nitroflare | 300MB |
| Zippyshare | Ilimitado |
| Upload.ee | Ilimitado |
| Anonfile | Ilimitado |
| Dailyleech.com | Ilimitado |
| vnz-leech.com | Cuesta 6 dólares mensuales (Razón por revisar) |
| get4all.org | Confusión, revisar |

### Microsoft

| Nombre | Características | Requerido |
| --- | --- | --- |
| [`EN`] [Generador de Enlaces de la Tienda de Microsoft](https://store.rg-adguard.net/) | Descarga directa desde los servidores de Microsoft.<br>**Versiones disponibles:** Rápido, Lento, Prelanzamiento, Por defecto. | **Solo uno es necesario:**<br>Enlace URL<br>Identificación del producto<br>Nombre de la familia del paquete<br>Identificación de la categoría |
| [`EN`] [Generador de Enlaces de `.isos` de Microsoft](https://tb.rg-adguard.net/public.php) | Descarga directa desde los servidores de Microsoft.<br>**Versiones disponibles:** Tipo, Versión, Edición, Lenguaje. | Ninguno |

### Específicos

| Nombre | Sitios Soportados | Características |
| --- | --- | --- |
| [`EN`] [APKCombo](https://apkcombo.com/es-pe/apk-downloader/) `Google Play Store` | Google Play Store | Descarga desde los servidores de la tienda de Google.<br>Evita restricciones regionales.<br>**Opciones múltiples:**<br>Tipo de dispositivo (Por defecto, Teléfono, Tableta, Televisión)<br>Arquitectura del dispositivo (Por defecto, armeabi-v7a, arm64-v8a, x86, x86_64)<br>Versión de Android (Por defecto, 4.4, 5.0, 5.1, 6.0, 7.0, 7.1, 8.0, 8.1, 9.0, 10) |
| [DLScrib](https://dlscrib.com/) `Scribd` | Scribd | Descarga documentos desde los servidores de Scribd. |
| [Slideshare Downloader](https://www.slidesharedownloader.com/) | Slideshare | Descarga presentaciones de Slideshare. |

## Línea de comando

| Nombre | Características | Protocolos |
| --- | --- | --- |
| [`EN`] [aria2](https://aria2.github.io/) | Multiconexión y multidescarga<br>Uso eficiente de espacio y recursos<br>Cliente Bittorrent<br>Metaenlaces activados: [The Metalink Download Description Format](http://tools.ietf.org/html/rfc5854) (aka Metalink v4), Metalink versión 3, [Metalink/HTTP](http://tools.ietf.org/html/rfc6249)<br>Control remoto: JSON-RPC (HTTP y WebSocket), XML-RPC | HTTP/HTTPS, FTP, SFTP, BitTorrent, Metalink |
| [Vim Cheat Sheet](https://quickref.me/vim) | Guía rápida de Vim. | - | - |

## Mejora personal

| Nombre | Características |
| --- | --- |
| [`EN`] [Entrenamiento Físico](https://nytimes.com/interactive/projects/well/workouts/) | Ejercicios y ejemplos. |
| [`EN`] [Typing](https://typing.com) | Practica mecanografía. |
| [TaskWarrior](https://taskwarrior.org) | Gestión de tareas mediante línea de comando. |
| [Tweakeze](https://www.tweakeze.com/) | Monitoreo de cambios en el PC. |
| [XMeters](https://entropy6.com/xmeters/) | Herramientas de medición del sistema. |
| [Taskbar Stats](https://openhoangnc.github.io/taskbar-stats/) | Estadísticas en la barra de tareas. |
| [Pitikapp](https://pitikapp.com/) | Dashboard remoto para PC: monitorea GPU, CPU, RAM, framerate en tiempo real. |

## Organización del tiempo

| Nombre | Características |
| --- | --- |
| [`EN`] [Timo](https://hellotimo.co/) | Simple y bonita interfaz.<br>**Funciones:**<br>Seguimiento de tareas<br>Modo oscuro. |
| [TodoHQ](https://todohq.co/) | Simple y bonita interfaz.<br>**Funciones:**<br>Crea listas de tareas<br>Sincronización<br>Modo oscuro. |
| [Notifier.so](https://notifier.so/) | Recibe notificaciones cuando se publique contenido. |
| [Nibbler](https://nibbler.silktide.com/) | Prueba de sitios web: accesibilidad, SEO, tracking. |
| [ParseHub](https://www.parsehub.com/pricing) | Web scraping (versiones de pago y gratuita). |
| [Browse AI](https://dashboard.browse.ai/tasks) | Scraping diario con integración Zapier. |
| [Tally](https://tally.so/dashboard) | Creador de formularios, similar a Google Forms. |
