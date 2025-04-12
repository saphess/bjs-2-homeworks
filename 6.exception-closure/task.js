function parseCount(count) {
    if (isNaN(Number.parseFloat(count))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(count);
}

function validateCount(count) {
    try {
        const result = parseCount(count);
        return result;
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        this._perimeter = this.a + this.b + this.c;
        return this._perimeter;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        this._area = Number(area.toFixed(3));
        return this._area;
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    }
    catch (e) {
        let error = {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
        return error;
    }
}