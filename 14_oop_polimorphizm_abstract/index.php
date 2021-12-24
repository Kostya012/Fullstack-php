<?php

use Cars as GlobalCars;

class Cars
{

  private $color, $mark, $model, $hp;

  public function set_color($color)
  {
    $this->color = $color;
    return $this;
  }

  public function set_mark($mark)
  {
    $this->mark = $mark;
    return $this;
  }

  public function set_model($model)
  {
    $this->model = $model;
    return $this;
  }

  public function set_hp($hp)
  {
    $this->hp = $hp;
    return $this;
  }

  public function get_color()
  {
    return $this->color;
  }

  public function get_mark()
  {
    return $this->mark;
  }

  public function get_model()
  {
    return $this->model;
  }

  public function get_hp()
  {
    return $this->hp;
  }

  public function get_info()
  {
    $properties = ["mark", "model", "color", "hp"];
    $res = [];
    foreach ($properties as $prop) {
      $res[] = $this->{"get_" . $prop}();
    }
    return implode(", ", $res) . "\n";
  }
}

class CarsWithGasoline extends Cars
{
  private $engineVolume, $fuelTankVolume;

  public function set_engineVolume($engineVolume)
  {
    $this->engineVolume = $engineVolume;
    return $this;
  }

  public function set_fuelTankVolume($fuelTankVolume)
  {
    $this->fuelTankVolume = $fuelTankVolume;
    return $this;
  }

  public function get_engineVolume()
  {
    return $this->engineVolume;
  }

  public function get_fuelTankVolume()
  {
    return $this->fuelTankVolume;
  }

  public function get_infoEngine()
  {
    return $this->engineVolume ? 'Volume engine: ' . $this->engineVolume . "\n" :  "unknown volume engine " . "\n";
  }

  public function get_infoFuelTank()
  {
    return $this->fuelTankVolume ? 'Volume fuel tank: ' . $this->fuelTankVolume . "\n" :  "unknown volume fuel tank" . "\n";
  }

  public function get_info()
  {
    return parent::get_info() . " " . $this->get_infoEngine() . " L " . $this->get_infoFuelTank() . " L ";
  }
}

$fordTransit = new Cars();
$fordTransit->set_color("White");
$fordTransit->set_mark("Ford");
$fordTransit->set_model("Transit");
$fordTransit->set_hp(100);

echo $fordTransit->get_info();
echo '<br/>';

$vaz01 = new CarsWithGasoline();

$vaz01->set_color("Red")
  ->set_mark("Vaz")
  ->set_model("Kopeyka")
  ->set_hp(50)
  ->set_engineVolume(1.3)
  ->set_fuelTankVolume(45);

echo $vaz01->get_info();
echo '<br/>';

class RearDrive extends CarsWithGasoline
{
  private $placeEngine;

  public function __set($key, $placeEngine)
  {
    if ($key == 'placeEngine') {
      $this->placeEngine = $placeEngine;
      return $this;
    }
  }

  public function __get($placeEngine)
  {
    if ($placeEngine == 'placeEngine') {
      if (isset($this->placeEngine)) {
        return $this->placeEngine;
      } else {
        return null;
      }
    }
  }

  public function set_placeEngine($placeEngine)
  {
    $this->placeEngine = $placeEngine;
    return $this;
  }

  protected function get_placeEngine()
  {
    return $this->placeEngine;
  }

  public function get_info()
  {
    return parent::get_info() . " Place engine: " . $this->get_placeEngine();
  }
}

$porshe911 = new RearDrive();

$porshe911->set_color("Yellow")
  ->set_mark("Porshe")
  ->set_model("911")
  ->set_hp(520)
  ->set_engineVolume(3.8)
  ->set_fuelTankVolume(64);
$porshe911->placeEngine = "behind";

echo $porshe911->get_info();
echo '<br/>';

// Полиморфизм

class Driver
{
  public $name, $surname, $age;
  private $transport;

  function take_transport($transport)
  {
    if (!is_object($transport)) return;
    $this->transport = $transport;
  }

  function get_info()
  {
    return $this->name . ' ' . $this->surname . ' ' . $this->age . ' years';
  }

  function drive()
  {
    if (is_object($this->transport)) {
      $this->transport->drive();
    } else echo $this->get_info() . ' don\'t have transport for drive' . '<br/>';
  }
}

class Tractor extends GlobalCars
{
  function drive()
  {
    echo 'I am driving my tractor.' . '<br/>';
  }
}

class Bus extends GlobalCars
{
  function drive()
  {
    echo 'I am driving my bus.' . '<br/>';
  }
}

$tractorT100 = new Tractor();

$Vasia = new Driver();
$Vasia->name = 'Vasia';
$Vasia->surname = 'Best';
$Vasia->age = 23;
$Vasia->take_transport($tractorT100);
$Vasia->drive();

$busIkarus = new Bus();
$Vasia->take_transport($busIkarus);
$Vasia->drive();

// Абстрактный класс и интерфейс

interface canDrive
{
  function drive(); // тут все методы абстрактны. Необходимо метод реализовать и у класса к которому заимплементили данный интерфейс
}

abstract class DrivingTransport implements canDrive
{
  function drive() // обычный метод, не абстрактный как у интерфейса
  {
    echo 'I am driving my ' . strtolower(get_class($this)) . '<br/>';
    echo $this->additionalInfo() . ' color' . '<br/>';
  }
  abstract protected function additionalInfo(); // необходимо метод реализовать и у класса который наследуется от данного абстрактного класса с абстрактным методом
}

class Trollaybus extends DrivingTransport
{
  protected function additionalInfo()
  {
    echo $this->color;
  }
}
class Tram extends DrivingTransport
{
  protected function additionalInfo()
  {
    echo $this->color . '<br/>';
  }
  function drive()
  {
    echo 'I am driving my tram with route number 5' . '<br/>';
  }
}

// solid соблюдается

$trollaybus3 = new Trollaybus();
$trollaybus3->color = 'green';

$tram5 = new Tram();
$tram5->color = 'yellow';

$Vasia->take_transport($trollaybus3);
$Vasia->drive();

$Vasia->take_transport($tram5);
$Vasia->drive();
