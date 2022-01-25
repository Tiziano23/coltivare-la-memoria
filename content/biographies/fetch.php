<?php
chdir(__DIR__);
header("Content-type:application/json; charset=utf-8");
echo json_encode([
    "files" => glob("*.json")
]);
?>