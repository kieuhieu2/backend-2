from __future__ import annotations
from abc import ABC, abstractmethod
from random import randrange
from typing import List


class Subject(ABC):
    """
    The Subject interface khai bao cac phuong thuc de quan ly nguoi theo doi .
    """

    @abstractmethod
    def attach(self, observer: Observer) -> None:
        """
        them 1 nguoi theo doi vao danh sach.
        """
        pass

    @abstractmethod
    def detach(self, observer: Observer) -> None:
        """
        xoa 1 nguoi theo doi khoi danh sach.
        """
        pass

    @abstractmethod
    def notify(self) -> None:
        """
        thong bao tat ca nguoi theo doi.
        """
        pass


class ConcreteSubject(Subject):
    """
    Dai dien cho cac doi tuong theo doi. no giu danh sach cac observer va thong bao cho khi trang thai thay doi.
    """

    _state: int = None

    _observers: List[Observer] = []
    #List nhung nguoi theo doi

    def attach(self, observer: Observer) -> None:
        print("Subject: Attached an observer.")
        self._observers.append(observer)

    def detach(self, observer: Observer) -> None:
        self._observers.remove(observer)


    def notify(self) -> None:
        """
        thong bao moi khi cap nhap trang thai.
        """

        print("Subject: Notifying observers...")
        for observer in self._observers:
            observer.update(self)

    def some_business_logic(self) -> None:

        print("\nSubject: I'm doing something important.")
        self._state = randrange(0, 10)

        print(f"Subject: My state has just changed to: {self._state}")
        self.notify()


class Observer(ABC):
    """
    Observer interface khai bao cac phuong thuc cap nhap, duoc su dung boi Subject.
    """

    @abstractmethod
    def update(self, subject: Subject) -> None:
        """
        Receive update from subject.
        """
        pass

class ConcreteObserverA(Observer):
    def update(self, subject: Subject) -> None:
        if subject._state < 3:
            print("ConcreteObserverA: Reacted to the event A")


class ConcreteObserverB(Observer):
    def update(self, subject: Subject) -> None:
        if subject._state == 0 or subject._state >= 2:
            print("ConcreteObserverB: Reacted to the event B")


if __name__ == "__main__":

    #khi state thay doi, cac observer se nhan duoc thong bao va thuc hien hanh dong tuong ung
    subject = ConcreteSubject()

    observer_a = ConcreteObserverA()
    subject.attach(observer_a)

    observer_b = ConcreteObserverB()
    subject.attach(observer_b)

    subject.some_business_logic()
    subject.some_business_logic()

    subject.detach(observer_a)

    subject.some_business_logic()