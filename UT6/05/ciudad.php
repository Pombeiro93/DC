<?php
$ciudades = array("madrid", "aranda", "zaragoza", "valladolid", "burgos");

$encontrado = false;

for ($i = 0; $i < count($ciudades); $i++) {
    if (strcmp($ciudades[$i], $_POST["ciudad"]) == 0)
        $encontrado = true;
}

echo $encontrado ? "si existe" : "no existe";