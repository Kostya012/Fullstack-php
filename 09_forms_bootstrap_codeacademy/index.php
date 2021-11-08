<?php
session_start();
$_SESSION["id"] = "2525-3825-2388";

/**
 * @param string $value
 *
 * @return string
 */
function clean(string $value = ""):string
{
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    return $value;
}

/**
 * @return string
 */
function gen_token():string {
    $token = md5(microtime() . 'salt' . time());
    return $token;
}
if (isset($_POST["send"])) {
    $token = clean($_POST["token"]);
    if ($token === $_SESSION["token"]) {
        $idProduct = clean($_POST["idProduct"]);
        $idProduct = explode("-", $idProduct);
        $name = clean($_POST["name"]);
        $phone = clean($_POST["phone"]);
        $delivery = clean($_POST["delivery"]);
        $delAddress = clean($_POST["delAddress"]);
    } else {
        echo 'token error';
        exit();
    }
} else {
    $_SESSION["token"] = gen_token();
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Home work form with bootstrap</title>
    <style>
        div {
            margin-bottom: 10px;
            position: relative;
        }
        .form-group {
            margin-top: 35px;
        }

        .form-control, .vermid {
            display: inline;
        }

        .vermid {
            height: 3em;
            line-height: 3em;
        }

        input[type="tel"] {
            width: 150px;
        }
        input[type="text"] {
            width: 180px;
        }

        input + span {
            padding-right: 30px;
        }

        input:invalid+span:after {
            position: absolute; content: '✖';
            padding-left: 5px;
            color: #8b0000;
        }

        input:valid+span:after {
            position: absolute;
            content: '✓';
            padding-left: 5px;
            color: #009000;
        }
        textarea:invalid {
            border: 2px dashed red;
        }

        textarea:valid {
            border: 2px solid lime;
        }
    </style>
</head>
<body>
    <h2>Task 2 form with bootstrap</h2>
<?php
if (@isset($idProduct) && gettype($idProduct) === 'array' && count($idProduct) > 0) {
    $idProduct = implode(", ", $idProduct);
    echo "ID products: $idProduct<br/>";
    echo "Your name: $name<br/>";
    echo "Your phone: $phone<br/>";
    echo "Type delivery: $delivery<br/>";
    echo "Delivery address: $delAddress<br/>";
}
?>
    <div class="container">
        <form name="checkout" action="<?php echo $_SERVER['SCRIPT_NAME'];?>" method="post">
            <input type="hidden" name="idProduct" value="<?= $_SESSION['id']; ?>" >
            <input type="hidden" name="token" value="<?= $_SESSION['token']; ?>" >
            <div class="form-group">
                <label for="name">Your name:</label><br/>
                <div class="vermid">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name" required minlength="2" maxlength="11">
                    <span class="validity"></span>
                </div>
                <span>(A..z, 0..9, min 2 chars)</span><br/>
            </div>
            <div class="form-group">
                <label for="phone">Enter a telephone number (in the form xxx-xxx-xxxx):</label><br/>
                <div class="vermid">
                    <span>+38</span><input type="tel" class="form-control" name="phone" id="phone" required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your phone" >
                    <span class="validity"></span>
                </div>
                <br/>
            </div>
            <div class="form-group">
                <label for="delivery">Type of delivery:</label><br/>
                <select name="delivery" class="form-control" size="1">
                    <option value=1 selected>Ukrposhta</option>
                    <option value=2>Nova poshta</option>
                    <option value=3>Justin</option>
                    <option value=4>Express</option>
                </select>
            </div>
            <div class="form-group">
                <label for="delAddress">Delivery address (A..z, 0..9, min 7 chars)</label><br/>
                <textarea name="delAddress" class="form-control" id="delAddress" rows="7" cols="50" placeholder="Enter delivery address" required minlength="7" maxlength="50"></textarea>
                <span class="validity"></span><br/>
            </div>
            <input type=submit class="btn btn-primary" name="send" value="Done">
            <input type="reset" class="btn btn-secondary">
        </form>
    </div>
</body>
</html>
