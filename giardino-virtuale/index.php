<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="activeMenuItem" content="giardino" />
    <base href="../" />

    <title>Coltivare la Memoria - Giardino virtuale</title>

    <?php require_once "../content/includes/global.html" ?>
    <link rel="stylesheet" href="content/styles/giardino-virtuale/style.css" />

    <script src="content/scripts/htmlTemplateLoader.js"></script>
    <script src="content/includes/header.js"></script>
</head>

<body>
    <div class="vstack gap-0" id="content">
        <?php require_once "../content/includes/header.html" ?>
        <iframe
            class="virtual-tour"
            allow="vr; gyroscope; accelerometer; fullscreen; autoplay; xr"
            allowvr="yes"
            allowfullscreen="true"
            scrolling="no"
            frameborder="0"
            src="https://webobook.com/public/61eae7f33681322d041f9ff2,en?ap=false&si=false&sm=false&sp=false&sfr=false&sl=false&sop=false"
        ></iframe>
    </div>
</body>

</html>
