#interface injection
from abc import ABC, abstractmethod

class EngineInterface(ABC):
    @abstractmethod
    def start(self):
        pass

class Car:
    def __init__(self):
        self.engine = None

    def set_engine(self, engine: EngineInterface):
            self.engine = engine

    def start(self):
        if self.engine is not None:
            self.engine.start()
        else:
            print("Khong the no may vi thieu dong co")

class DieselEngine(EngineInterface):
    def start(self):
        print("Dong co Diesel da khoi dong")

class PetrolEngine(EngineInterface):
    def start(self):
        print("Dong co Petrol da khoi dong")

def main():
    car = Car()

    dieselEngine = DieselEngine()
    petrolEngine = PetrolEngine()

    car.set_engine(dieselEngine)
    # car.set_engine(petrolEngine)

    car.start()

if __name__ == "__main__":
    main()