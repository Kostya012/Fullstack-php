<?php

class Cars {

 private $color, $mark, $model, $hp; 

 public function set_color($color){
  $this->color = $color;
  return $this;
 }

 public function set_mark($mark){
  $this->mark = $mark;
  return $this;
 }

 public function set_model($model){
  $this->model = $model;
  return $this;
 }

 public function set_hp($hp){
  $this->hp = $hp;
  return $this;
 }

 public function get_color(){
  return $this->color;
 }

 public function get_mark(){
  return $this->mark;
 }

 public function get_model(){
  return $this->model;
 }

 public function get_hp(){
  return $this->hp;
 }

 public function get_info(){
  $properties = ["mark", "model", "color", "hp"];
  $res = [];
  foreach ($properties as $prop) {
   $res[] = $this->{"get_" . $prop}();
  }
  return implode(", ", $res) . "\n";
 }

}

class CarsWithGasoline extends Cars {
  private $engineVolume, $fuelTankVolume;

  public function set_engineVolume($engineVolume){
    $this->engineVolume = $engineVolume;
    return $this;
  }

  public function set_fuelTankVolume($fuelTankVolume){
    $this->fuelTankVolume = $fuelTankVolume;
    return $this;
  }

  public function get_engineVolume(){
    return $this->engineVolume;
  }

  public function get_fuelTankVolume(){
    return $this->fuelTankVolume;
  }

  public function get_infoEngine(){
		return $this->engineVolume ? 'Volume engine: ' . $this->engineVolume . "\n" :  "unknown volume engine " . "\n";
	}

  public function get_infoFuelTank(){
		return $this->fuelTankVolume ? 'Volume fuel tank: ' . $this->fuelTankVolume . "\n" :  "unknown volume fuel tank" . "\n";
	}

  public function get_info(){
		return parent::get_info(). " " . $this->get_infoEngine() . " L " . $this->get_infoFuelTank() . " L ";
			 
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

class RearDrive extends CarsWithGasoline {
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

  public function set_placeEngine($placeEngine){
    $this->placeEngine = $placeEngine;
    return $this;
  }

  protected function get_placeEngine(){
    return $this->placeEngine;
  }

  public function get_info(){
		return parent::get_info(). " Place engine: " . $this->get_placeEngine();
			 
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