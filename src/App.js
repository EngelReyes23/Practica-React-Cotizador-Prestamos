import { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {
	// Define State
	const [cantidad, setCantidad] = useState(0);
	const [plazo, setPlazo] = useState("");
	const [total, setTotal] = useState(0);
	const [cargando, setCargando] = useState(false);

	return (
		<Fragment>
			<Header
				titulo="Cotizador de prestamos"
				descripcion="Utiliza el formulario y obten una cotizacion"
				plazo={plazo}
			/>
			<div className="container">
				<Formulario
					setCargando={setCargando}
					cantidad={cantidad}
					setCantidad={setCantidad}
					plazo={plazo}
					setPlazo={setPlazo}
					total={total}
					setTotal={setTotal}
				/>
				<div className="mensajes">
					{cargando ? (
						<Spinner />
					) : total === 0 ? (
						<Mensaje />
					) : (
						<Resultado total={total} plazo={plazo} cantidad={cantidad} />
					)}
				</div>
			</div>
		</Fragment>
	);
}

export default App;
