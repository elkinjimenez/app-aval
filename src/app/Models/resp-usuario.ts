export interface RespUsuario {
  shareHolder: Usuario;
  actionsAttorney: [];
  responseStatus: ResponseStatus;
}

export interface Usuario {
  tipId: string;
  numId: string;
  numeroAccion: string;
  nombresApellidos: string;
  correo: string;
  apoderado: boolean;
  saldoTotal: string;
  ipAcceso: string;
  fechaUltimoAcceso: string;
  fechaCreacion: string;
  autoriza: boolean;
  moderador: boolean;
  attorneyXShareHolderId: any;
  questionXActionList: [];
}

export interface ResponseStatus {
  returnCode: string;
  descriptoCode: string;
  menssage: string;
}
