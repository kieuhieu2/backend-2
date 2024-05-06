class Component():

    def operation(self) -> str:
        pass


class ConcreteComponent(Component):

    def operation(self) -> str:
        return "ConcreteComponent"


class Decorator(Component):

    _component: Component = None

    def __init__(self, component: Component) -> None:
        self._component = component

    #tra ve 1 Component
    @property
    def component(self) -> Component:

        return self._component

    def operation(self) -> str:
        return self._component.operation()


class ConcreteDecoratorA(Decorator):
    """
    Là các lớp decorator cụ thể, mở rộng từ lớp Decorator. 
    Chúng ghi đè phương thức operation() để thêm hành vi mới trước hoặc 
    sau khi gọi phương thức tương ứng trên đối tượng được bọc.
    """

    def operation(self) -> str:
        return f"ConcreteDecoratorA({self.component.operation()})"


class ConcreteDecoratorB(Decorator):

    def operation(self) -> str:
        return f"ConcreteDecoratorB({self.component.operation()})"


def client_code(component: Component) -> None:


    # ...

    print(f"RESULT: {component.operation()}", end="")

    # ...


if __name__ == "__main__":

    simple = ConcreteComponent()
    print("Client: I've got a simple component:")
    client_code(simple)
    print("\n")


    decorator1 = ConcreteDecoratorA(simple)
    decorator2 = ConcreteDecoratorB(decorator1)
    print("Client: Now I've got a decorated component:")
    client_code(decorator2)
    print("\n")


