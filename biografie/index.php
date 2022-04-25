<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="../">

    <title>Coltivare la Memoria - Biografie</title>

    <?php require_once "../content/includes/global.html" ?>
    <link rel="stylesheet" href="content/styles/biografie/style.css" />
</head>

<body>
    <?php require_once "../content/includes/header.html" ?>

    <div class="container-lg mt-4 vstack gap-5" style="margin-bottom: 5rem">
        <div class="map">
            <iframe id="map-frame" src="content/map/index.html"></iframe>
        </div>
        <div class="list">
            <table class="table" id="righteous">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Luogo</th>
                        <th>Data di nascita</th>
                        <th>Data del riconoscimento</th>
                        <th>Link</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    <?php require_once "../content/includes/footer.html" ?>

    <script src="content/scripts/loader.js"></script>
</body>

</html>
