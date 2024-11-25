import React, { useState } from "react";
import './NuevaVisita.css'; // Estilos opcionales

const NuevaVisita = () => {
  const [formData, setFormData] = useState({
    project: "",
    client: "",
    supervisor: "",
    visitDate: "",
    obra: "",
    direccion: "",
    mandante: "",
    contacto: "",
    nombre: "",
    telefono: "",
    cargo: "",
    correo: "",
    description: "",
    status: "Pending",  // Valor por defecto
    revisionZonas: "no", // Selección de zonas según contrato
    descripcionSector: "",
    revisionZonasAdicionales: "no", // Selección de zonas adicionales
    descripcionSectorAdicional: "",
    observaciones: "", // Observaciones del supervisor/cliente
    firmaSupervisor: "", // Firma supervisor
    firmaResponsable: "", // Firma responsable obra
    evaluacionPersonal: "", // Evaluación personal de obra
    nombreTrabajador: "", // Nombre del trabajador
    evaluacionTrabajador: "N/A", // Evaluación de trabajador (Bien, Mal, N/A)
    checklist: { // Estado para los elementos del checklist
        revisionLibroObra: false,
        revisionStockMateriales: false,
        charla5Minutos: false,
        documentosPersonalesObra: false,
        protocolosVales: false,
        entregaInsumos: false,
        planificacionTrabajos: false,
      },
    });
  
    const handleChange = (e) => {
      const { name, checked } = e.target;
      if (name in formData.checklist) {
        setFormData({
          ...formData,
          checklist: {
            ...formData.checklist,
            [name]: checked, // Cambiar el estado del checkbox
          },
        });
      } else {
        setFormData({
          ...formData,
          [name]: e.target.value,
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para enviar la nueva visita al backend
      console.log("Visita a obra enviada:", formData);
    };

  return (
    <div className="nueva-visita-container">
      <h2>Visita a Obra</h2>
      <form onSubmit={handleSubmit}>
        {/* Información general de la visita */}
        <label>
          Proyecto:
          <input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cliente:
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Supervisor:
          <input
            type="text"
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Fecha de visita:
          <input
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
            required
          />
        </label>

        {/* Recuadro de Antecedentes de la obra */}
        <fieldset className="antecedentes-container">
          <legend>Antecedentes de la obra</legend>

          <label>
            Obra:
            <input
              type="text"
              name="obra"
              value={formData.obra}
              onChange={handleChange}
            />
          </label>

          <label>
            Dirección de la obra:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>

          <label>
            Mandante:
            <input
              type="text"
              name="mandante"
              value={formData.mandante}
              onChange={handleChange}
            />
          </label>

          <label>
            Contacto en obra:
            <input
              type="text"
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
            />
          </label>

          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>

          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>

          <label>
            Cargo:
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
            />
          </label>

          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        {/* Recuadro de Descripción de la Visita */}
        <fieldset className="descripcion-container">
          <legend>Descripción de la Visita</legend>

          <label>
            Revisión de zonas según contrato:
            <select
              name="revisionZonas"
              value={formData.revisionZonas}
              onChange={handleChange}
            >
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          {formData.revisionZonas === "yes" && (
            <label>
              Descripción del sector:
              <input
                type="text"
                name="descripcionSector"
                value={formData.descripcionSector}
                onChange={handleChange}
              />
            </label>
          )}

          <label>
            Revisión de zonas adicionales:
            <select
              name="revisionZonasAdicionales"
              value={formData.revisionZonasAdicionales}
              onChange={handleChange}
            >
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          {formData.revisionZonasAdicionales === "yes" && (
            <label>
              Descripción del sector adicional:
              <input
                type="text"
                name="descripcionSectorAdicional"
                value={formData.descripcionSectorAdicional}
                onChange={handleChange}
              />
            </label>
          )}
        </fieldset>

        {/* Observaciones */}
        <fieldset className="observaciones-container">
          <legend>Observaciones Supervisor/Cliente</legend>
          <textarea
            name="observaciones"
            value={formData.observaciones}
            onChange={handleChange}
          />
        </fieldset>

        {/* Firmas */}
        <fieldset className="firmas-container">
          <legend>Firmas</legend>
          <label>
            Firma del Supervisor:
            <input
              type="text"
              name="firmaSupervisor"
              value={formData.firmaSupervisor}
              onChange={handleChange}
            />
          </label>

          <label>
            Firma del Responsable de la Obra:
            <input
              type="text"
              name="firmaResponsable"
              value={formData.firmaResponsable}
              onChange={handleChange}
            />
          </label>
        </fieldset>

        {/* Uso interno */}
        <fieldset className="uso-interno-container">
          <legend>Uso Interno</legend>

          <label>
            Evaluación personal de obra:
            <input
              type="text"
              name="evaluacionPersonal"
              value={formData.evaluacionPersonal}
              onChange={handleChange}
            />
          </label>

          <label>
            Nombre del trabajador:
            <input
              type="text"
              name="nombreTrabajador"
              value={formData.nombreTrabajador}
              onChange={handleChange}
            />
          </label>

          <label>
            Evaluación del trabajador:
            <select
              name="evaluacionTrabajador"
              value={formData.evaluacionTrabajador}
              onChange={handleChange}
            >
              <option value="Bien">Bien</option>
              <option value="Mal">Mal</option>
              <option value="N/A">N/A</option>
            </select>
          </label>
        </fieldset>

        {/* Checklist de actividades */}
        <fieldset className="checklist-container">
          <legend>Checklist de Actividades</legend>
          <label>
            <input
              type="checkbox"
              name="revisionLibroObra"
              checked={formData.checklist.revisionLibroObra}
              onChange={handleChange}
            />
            Revisión del libro de obra
          </label>

          <label>
            <input
              type="checkbox"
              name="revisionStockMateriales"
              checked={formData.checklist.revisionStockMateriales}
              onChange={handleChange}
            />
            Revisión de stock de materiales
          </label>

          <label>
            <input
              type="checkbox"
              name="charla5Minutos"
              checked={formData.checklist.charla5Minutos}
              onChange={handleChange}
            />
            Charla de 5 minutos
          </label>

          <label>
            <input
              type="checkbox"
              name="documentosPersonalesObra"
              checked={formData.checklist.documentosPersonalesObra}
              onChange={handleChange}
            />
            Documentos de personal en obra al día
          </label>

          <label>
            <input
              type="checkbox"
              name="protocolosVales"
              checked={formData.checklist.protocolosVales}
              onChange={handleChange}
            />
            Protocolos y/o vales
          </label>

          <label>
            <input
              type="checkbox"
              name="entregaInsumos"
              checked={formData.checklist.entregaInsumos}
              onChange={handleChange}
            />
            Entrega de insumos
          </label>

          <label>
            <input
              type="checkbox"
              name="planificacionTrabajos"
              checked={formData.checklist.planificacionTrabajos}
              onChange={handleChange}
            />
            Planificación de trabajos
          </label>
        </fieldset>

        {/* Estado de la visita */}
        <label>
          Estado:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pendiente</option>
            <option value="Completed">Completada</option>
          </select>
        </label>

        <button type="submit">Crear Visita</button>
      </form>
    </div>
  );
};

export default NuevaVisita;
