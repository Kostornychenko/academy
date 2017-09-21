<?php
    error_reporting(E_ALL & ~E_NOTICE);

    $users = array("John" => "user", "Alex" => "admin", "David" => "user", "Jeremy" => "admin");

    $data = file_get_contents('php://input');
    $data = json_decode($data, true);

    if ($data["name"] || $data["role"]) {
        $name = $data["name"];
        $role = $data["role"];
        setUserView($name, $role);
    }

    if (isset($_GET["list"]) && $_GET["list"] == "show") {
        showList($users);
    }

    function setUserView ($name, $role = "") {
        if ($role == "admin") {
            echo $name = "<li><strong>".$name."</strong></li>";
        } else {
            echo $name = "<li>".$name."</li>";
        }
    };

    function showList($users) {
        foreach ($users as $key => $value) {
            if ($value == "admin") {
                echo "<li><strong>".$key."</strong></li>";
            } else {
                echo "<li>".$key."</li>";
            }
        }
    }
?>