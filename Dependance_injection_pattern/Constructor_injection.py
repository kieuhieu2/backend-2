# 1) Constructor injection
class Wheels:
    def rotate(self):
        pass

class Engine:
    def start(self):
        pass

class HondaEngine(Engine):
    def start(self):
        print("Dong co Honda")
class YamahaEngine(Engine):
    def start(self):
        print("Dong co Yamaha")

# cac kieu banh xe
class YamahaWheels(Wheels):
    def rotate(self):
        print("banh xe yamaha da duoc lap dat")

class HondaWheels(Wheels):
    def rotate(self):
        print("Banh xe Honda da duoc lap dat")

# tao ra class su dung constructor injection
class Car:
    def __init__(self, wheels: Wheels, engine: Engine):
        self.wheels = wheels
        self.engine = engine

    def drive(self):
        self.engine.start()
        self.wheels.rotate()

yamaha_wheels = YamahaWheels()
engine = Engine()


car_with_yamaha = Car(yamaha_wheels, engine)
car_with_yamaha.drive()

honda_wheels = HondaWheels()
car_with_honda = Car(honda_wheels, engine)
car_with_honda.drive()



