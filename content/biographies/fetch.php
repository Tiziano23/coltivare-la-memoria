<?php
header("Content-type:application/json; charset=utf-8");
chdir(__DIR__);
echo json_encode([
    "files" => glob("*.json")
]);
?>