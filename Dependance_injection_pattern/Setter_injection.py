#setter injection

class Wheels:
    def rotate(self):
        pass

class Engine:
    def start(self):
        pass

class HondaWheels(Wheels):
    def rotate(self):
        print("banh xe Honda da duoc lap dat")

class YamahaWheels(Wheels):
    def rotate(self):
        print("banh xe yamaha da duoc lap dat")

class Car:
    def __init__(self):
        self._wheels = None
        self._engine = None

    def set_wheels(self, wheels: Wheels):
        self._wheels = wheels

    def set_engine(self, engine: Engine):
        self._engine = engine

    def drive(self):
        if self._engine is not None and self._wheels is not None:
            self._engine.start()
            self._wheels.rotate()
        else:
            print("Khong the no may vi thieu dong co")

honda_wheels = HondaWheels()
engine = Engine()


car = Car()
car.set_wheels(honda_wheels)
car.set_engine(engine)
car.drive()

# yamaha_wheels = YamahaWheels()
# car.set_wheels(yamaha_wheels)
# car.drive()
