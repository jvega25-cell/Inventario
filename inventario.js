class Inventario {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        this.productos.push(producto);
    }

    buscar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo == codigo) {
                return this.productos[i];
            }
        }
        return null;
    }

    buscarPosicion(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo == codigo) {
                return i;
            }
        }
        return -1;
    }

    eliminar(codigo) {
        let pos = this.buscarPosicion(codigo);
        if (pos == -1) {
            return null;
        }
        let eliminado = this.productos[pos];
        for (let i = pos; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return eliminado;
    }

    insertar(posicion, producto) {
        if (posicion < 0 || posicion > this.productos.length) {
            return false;
        }
        this.productos.push(producto);
        for (let i = this.productos.length - 1; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
        return true;
    }

    agregarInicio(producto) {
        return this.insertar(0, producto);
    }

    extraerPrimero() {
        if (this.productos.length == 0) {
            return null;
        }
        let primero = this.productos[0];
        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return primero;
    }

    listar() {
        if (this.productos.length == 0) {
            return "<p>Inventario vacío</p>";
        }
        let texto = "";
        for (let i = 0; i < this.productos.length; i++) {
            texto += this.productos[i].infoHtml();
        }
        return texto;
    }

    listarInverso() {
        if (this.productos.length == 0) {
            return "<p>Inventario vacío</p>";
        }
        let texto = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            texto += this.productos[i].infoHtml();
        }
        return texto;
    }
}
