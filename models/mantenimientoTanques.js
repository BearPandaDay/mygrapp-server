const mongoose = require('mongoose');

const mantenimientoSchema = new mongoose.Schema({
  // Programacion y ejecucion de inspecciones
  ProgramacionInspecciones: {
    Mes: {
      type: String,
      required: false
    },
    DiaP: {
      type: Date,
      required: false
    },
    DiaEj: {
      type: Date,
      required: false
    },
    Observaciones: {
      type: String,
      required: false
    }
  },


  // lista de chequeo de inspecciones de sistema de almacenamiento
  // el valor de cada criterio puede ser 1 o 0, (satisfactorio o insatistisfactorio)
  CondiTapasTanques: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  EstadoParedesIn: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiAccesoriosHidr: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiAccesoP: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiAccesoEquipoLimpieza: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiHermeticidadG: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiAdecRecurso: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiSistBombeo: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  CondiTubBypass: {
    valor: {
      type: Number,
      required: false
    },
    acciones: {
      type: String,
      required: false
    }
  },
  //esta es la sumatoria
  Consolidado: {
    type: Number,
    required: false
  },



  //seguimiento al cumplimiento normativo..
  //deben ser minimo 2 lavados por año 
  Seguimiento: {
    Anio: {
      type: Number,
      required: false
    },
    FechaPrimerLavado: {
      type: Date,
      required: false,
    },
    FechaSegundoLavado: {
      type: Date,
      required: false,
    },
    CumplimientoNormativo: { //cumple o no cumple
      type: String,
      required: false
    }
  },




  ObservacionesGenerales: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Mantenimiento", mantenimientoSchema);
