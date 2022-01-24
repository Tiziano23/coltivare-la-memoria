<?php
chdir("/giardino-dei-giusti/content/biographies/");
header("Content-type:application/json; charset=utf-8");
echo json_encode([
    "files" => glob("*.json")
]);
?>