import React, { useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
	const { setCantidad, setPlazo, cantidad, plazo, setTotal, setCargando } =
		props;

	// state para mensajes de error
	const [error, setError] = useState(false);

	// Cuando el usuario hace onSubmit
	const calcularPrestamo = (e) => {
		e.preventDefault();
		// Validar
		if (cantidad === 0 || plazo === "") {
			setError(true);
			return;
		}

		//  elimina el error previo
		setError(false);

		// Habilta el spinner
		setCargando(true);

		setTimeout(() => {
			// Realiza la contizacion
			setTotal(calcularTotal(cantidad, plazo));

			// Desabilita el Spinner
			setCargando(false);
		}, 1500);
	};

	return (
		<>
			<form onSubmit={calcularPrestamo}>
				<div className="row">
					<div>
						<label>Cantidad Prestamo</label>
						<input
							className="u-full-width"
							type="number"
							placeholder="Ejemplo: 3000"
							onChange={(e) => setCantidad(parseInt(e.target.value))}
						/>
					</div>
					<div>
						<label>Plazo para Pagar</label>
						<select
							className="u-full-width"
							onChange={(e) => setPlazo(parseInt(e.target.value))}
						>
							<option value="">Seleccionar</option>
							<option value="3">3 meses</option>
							<option value="6">6 meses</option>
							<option value="12">12 meses</option>
							<option value="24">24 meses</option>
						</select>
					</div>
					<div>
						<input
							type="submit"
							value="Calcular"
							className="button-primary u-full-width"
						/>
					</div>
				</div>
			</form>

			{/* Verifica si error es true o false */}
			{error ? (
				<p className="error">Todos los campos son obligatorios</p>
			) : null}
		</>
	);
};

export default Formulario;
