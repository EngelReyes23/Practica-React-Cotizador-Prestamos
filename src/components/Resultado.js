import React from "react";

const resultado = ({ cantidad, plazo, total }) => (
	<div className="u-full-width resultado">
		<h2>Resumen</h2>
		<p>
			<strong>Cantidad solicitada:</strong> ${cantidad}
		</p>
		<p>
			<strong>Plazo:</strong> {plazo} meses
		</p>
		<p>
			<strong>Pagos Mensuales de:</strong> ${(total / plazo).toFixed(2)}
		</p>
		<p>
			<strong>Total a pagar:</strong> ${total.toFixed(2)}
		</p>
	</div>
);

export default resultado;
