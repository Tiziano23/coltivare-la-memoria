<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="../../">

    <title>Coltivare la Memoria - Biografie</title>

    <?php require_once "../../content/includes/global.html" ?>
    <link rel="stylesheet" href="content/styles/biografie/archivio/style.css" />
</head>

<body>
    <?php require_once "../../content/includes/header.html" ?>

    <div id="app" class="container-lg mt-4" style="margin-bottom: 5rem">
        <div class="row">
            <div class="col-5">
                <div class="vstack align-items-center gap-3 mt-2 position-sticky top-0">
                    <img class="img-fluid w-100 shadow border border-5 border-light rounded" v-for="image in pictures" :src="image" />
                </div>
            </div>
            <div class="col-7">
                <h1>{{name}} {{surname}}</h1>
                <table class="table">
                    <tr>
                        <th>Genere</th>
                        <td>{{sex}}</td>
                    </tr>
                    <tr>
                        <th>Luogo di nascita</th>
                        <td>{{birthplace}}</td>
                    </tr>
                    <tr>
                        <th>Professione</th>
                        <td>{{occupation}}</td>
                    </tr>
                    <tr>
                        <th>Data di nascita</th>
                        <td>{{birthday}}</td>
                    </tr>
                    <tr>
                        <th>Data di morte</th>
                        <td>{{death_date}}</td>
                    </tr>
                    <tr>
                        <th>Riconosciuto in data</th>
                        <td>{{recognition_date}}</td>
                    </tr>
                    <tr>
                        <th>Ambito d'azione</th>
                        <td>{{category}}</td>
                    </tr>
                    <tr>
                        <th>Luogo del salvataggio</th>
                        <td>{{location}}</td>
                    </tr>
                </table>
                <div>
                    <h2>Biografia e storia</h2>
                    <div v-html="content" style="max-width:80ch;text-align:justify"></div>
                    <hr>
                    <p><strong>Fonti:</strong> {{sources}}</p>
                    <p><strong>Autori/Autrici:</strong> {{authors}}</p>
                </div>
            </div>
        </div>
    </div>

    <?php require_once "../../content/includes/footer.html" ?>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="content/scripts/catalog.js"></script>
</body>

</html>
