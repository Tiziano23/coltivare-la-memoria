<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="activeMenuItem" content="home">

    <title>Coltivare la Memoria - Home</title>

    <?php require_once "content/includes/global.html" ?>
    <link rel="stylesheet" href="content/styles/index/style.css" />
</head>

<body>
    <?php require_once "content/includes/header.html" ?>

    <main class="container-lg mt-4" style="margin-bottom:5rem">
        <div class="slideshow mb-5">
            <div class="picture active">
                <img src="content/pictures/slideshow-1.jpg" alt="Image 1" class="img-fluid" />
            </div>
            <div class="picture">
                <img src="content/pictures/slideshow-2.jpg" alt="Image 2" class="img-fluid" />
            </div>
            <div class="picture">
                <img src="content/pictures/slideshow-3.jpg" alt="Image 3" class="img-fluid" />
            </div>
            <div class="controls controls-left">
                <i class="bi-chevron-left"></i>
                <div class="background"></div>
            </div>
            <div class="controls controls-right">
                <i class="bi-chevron-right"></i>
                <div class="background"></div>
            </div>
        </div>
        <div class="article container-fluid mb-5" style="max-width:120ch;">
            <h1 class="display-1">Perché Coltivare la Memoria?</h1>
            <p>
                Il nostro progetto ha lo scopo di ricordare tutte quelle persone che si sono distinte nel corso della storia per i loro comportamenti solidali.<br />
                Tra queste personalità abbiamo individuato i 'Giusti fra le Nazioni', uomini e donne che durante il periodo della Seconda Guerra Mondiale hanno rischiato la propria vita salvando le persone ebree, allora perseguitate.
            </p>
            <p>
                Nei decenni a venire anche altre persone hanno seguito il loro esempio scegliendo di assumersi delle responsabilità importanti per aiutare coloro che avevano bisogno, senza alcuna distinzione.<br />
                Anche oggi ci sono persone che salvano migranti, che aiutano i perseguitati per motivi politici o religiosi, persone che tutelano la terra e l'ambiente, promuovendo una cultura della legalità, contrastando i fenomeni
                della criminalità organizzata e infine persone che si impegnano nella difesa dei Diritti Umani.
            </p>
            <p>
                In questo sito potrete trovare due sezioni principali.<br>
                L'archivio delle biografie, raccoglie le storie dei Giusti fra le Nazioni, che hanno agito sul territorio Toscano, ma anche relative ad altri ambiti, come lo sport, l'ambiente o la legalità.<br>
                Il Giardino virtuale, in cui si possono esplorare vari percorsi, e conoscere le storie dei Giusti e delle personalità che sono state approfondite.
            </p>
        </div>
    </main>

    <?php require_once "content/includes/footer.html" ?>

    <script src="content/scripts/index.js"></script>
</body>

</html>