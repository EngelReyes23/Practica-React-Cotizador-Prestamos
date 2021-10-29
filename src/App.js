import { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
	// Define State
	const [cantidad, setCantidad] = useState(0);

	return (
		<Fragment>
			<Header
				titulo="Cotizador de prestamos"
				descripcion="Utiliza el formulario y obten una cotizacion"
			/>
			<div className="container">
				<Formulario cantidad={cantidad} setCantidad={setCantidad} />
			</div>
		</Fragment>
	);
}

export default App;
