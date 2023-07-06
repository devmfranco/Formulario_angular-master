
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-form-principal',
  templateUrl: './form-principal.component.html',
  styleUrls: ['./form-principal.component.css']
})
export class FormPrincipalComponent {

  nombreCompleto!: string;
  viceMinisteriodir!: string;
  ubicacionEspecifica!: string;
  numeroContacto!: string;
  ayudaNecesaria!: string;
  tipoServicio!: string;
  abre = false;
  @Input() usuario = 'prueba';

validar = false;
  onSubmit() {
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Formulario enviado');
    console.log('Nombre completo: ' + this.nombreCompleto);
    console.log('Vice-ministerio o dirección: ' + this.viceMinisteriodir);
    console.log('Ubicación específica: ' + this.ubicacionEspecifica);
    console.log('Número de contacto o extensión: ' + this.numeroContacto);
    console.log('Ayuda necesaria: ' + this.ayudaNecesaria);
    console.log('Tipo de servicio: ' + this.tipoServicio);
  }

  imageUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {

    // Ruta de la imagen relativa a la carpeta de activos (assets)
    const imagePath = 'src/logo-micm-invertido.png';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);

    //campo 3
  }

  areas: any[] = [
  { value: 'Despacho del Vice-Ministro' },
  { value: 'Viceministerio Comercio Exterior' },
  { value: 'Viceministerio Comercio Interno' },
  { value: 'Viceministerio Desarrollo Industrial' },
  { value: 'Viceministerio Fomento Pequeña y Media Emp.' },
  { value: 'Viceministerio Zonas Francas y Regimenes Esp.' },
  { value: 'Dirección Administrativa' },
  { value: 'Dirección Financiera' },
  { value: 'Dirección Comercio Exterior' },
  { value: 'Dirección Comercio Interno' },
  { value: 'Dirección Control de Gestión' },
  { value: 'Dirección de Combustibles' },
  { value: 'Dirección de Comunicaciones' },
  { value: 'Dirección de Análisis Económico' },
  { value: 'Dirección de Ingeniería' },
  { value: 'Dirección de Recursos Humanos' },
  { value: 'Dirección de Tecnología' },
  { value: 'Dirección Jurídica' },
  { value: 'Dirección Plan Regulador' },
  { value: 'Dirección Planificación y Desarrollo' },
  { value: 'Dirección de Atención Integral al Cliente' },
  { value: 'Dirección De Administración De Acuerdos Y Tratados Comerciales Internacionales' },
  { value: 'Dirección Comercio Exterior' },
  { value: 'Dirección De Emprendimiento' },
  { value: 'Dirección de Operaciones de Supervisión de Actividades Comerciales' },
  { value: 'Dirección De Economía Industrial' },
  { value: 'Dirección De Servicios De Apoyo A Las Mipymes' },
  { value: 'Dpto. Compras y Contrataciones' },
  { value: 'Dpto. de Administración de Recursos Humanos' },
  { value: 'Dpto. de Contabilidad' },
  { value: 'Dpto. de Gestión Documental' },
  { value: 'Dpto. de Servicios Generales' },
  { value: 'Dpto. de Tesorería' },
  { value: 'Dpto. Desarrollo Humano y Planes de Carrera' },
  { value: 'Dpto. Relaciones Publicas y Pub.' },
  { value: 'Dpto. Servicio Personal y Relaciones Lab.' },
  { value: 'Dpto. Prensa' },
  { value: 'Dpto. de Servicios Presenciales' },
  { value: 'Dpto. de Servicios en línea' },
  { value: 'Dpto. de Acceso A La Información' },
  { value: 'División Archivo Central' },
  { value: 'División Centro de Documentación' },
  { value: 'División de almacén y Suministro' },
  { value: 'División de Seguridad Interna' },
  { value: 'División de Transportación' },
  { value: 'Monitoreo y Control Interno' },
  { value: 'Oficina de Acceso a la Información' },
  { value: 'Oficina de Acceso a la Información' },
  { value: 'Sección de Correspondencia' },
  { value: 'Sección Mantenimiento' },
  { value: 'Sección Mayordomia' },
  { value: 'Consultorio Medico' },
  { value: 'Coopemic' },
  ];

  //services
  services: any[] = [

    { value: 'USUARIOS Y ACCESOS' },
    { value: 'COMPUTADOR' },
    { value: 'INTERNET' },
    { value: 'IMPRESORA' },
    { value: 'ESCANER' },
    { value: 'CORREO ELECTRONICO' },
    { value: 'TELEFONÍA' },
    { value: 'SOFTWARE' },
    { value: 'REDES' },
    { value: 'UPS' },
    { value: 'VIRUS' },
    { value: 'ASISTENCIA SALÓN DE CONFERENCIAS'},
    { value: 'SERVICIOS AUDIOVISUALES'},

  ];

  // access
  accessDetail:any[] = [

    { value: 'CREACION DE USUARIO' },
    { value: 'USUARIO BLOQUEADO' },
    { value: 'CAMBIO DE CONTRASEÑA' },
    { value: 'DESHABILITACION DE USUARIO' },
    { value: 'CREACIÓN DE CARPETA COMPARTIDA' },
    { value: 'ACCESO A CARPETA COMPARTIDA' },

  ];

     //computer

      computer:any[] = [

      { value: 'PC FUERA DEL DOMINIO' },
      { value: 'MONITOR PRESENTA IMAGEN DISTORSIONADA' },
      { value: 'TECLADO NO FUNCIONA' },
      { value: 'DESHABILITACION DE USUARIO' },
      { value: 'CREACIÓN DE CARPETA COMPARTIDA' },
      { value: 'INSTALACIÓN DE EQUIPO(ESPECIFIQUE,PARA QUIEN Y EL PORQUE)' },
      { value: 'COMPUTADOR MUY LENTO' },
      ];


       //internet

      internet:any[] = [

      { value: 'SIN CONEXION A INTERNET' },
      { value: 'ACCESO A WIFI' },
      { value: 'SOLICITAR ACCESO A PAGINA ESPECIFICA' },

      ];

      //Printer

      printer:any[] = [

      { value: 'CONFIGURAR MAQUINA DE LABEL' },
      { value: 'CONFIGURAR IMPRESORA' },
      { value: 'IMPRIME HOJA SUCIA' },
      { value: 'NO IMPRIME' }

      ];

      //scanner

      scanner:any[] = [

      { value: 'NO ESCANEA' },
      { value: 'CONFIGURAR ESCANER'},

      ];

      //email

      email:any[] = [

      { value: 'CREACIÓN DE CORREO' },
      { value: 'CONFIGURAR CORREO ELECTRÓNICO EN PC' },
      { value: 'NO RECIBO ,NI ENVÍO CORREOS' },
      { value: 'CONFIGURAR FIRMA CORREO' },

      ];

      //phone

      phone:any[] = [

      { value: 'TRASLADAR APARATO TELEFONICO' },
      { value: 'SOLICITUD EXTENSIÓN TELEFÓNICA' },
      { value: 'CAMBIO DE EXT. O NOMBRE EN APARATO TELEFONICO' },
      { value: 'TELEFONO NO RECIBE LLAMADAS' },
      { value: 'NUEVA LINEA TELEFONICA' },

      ];

      //software

      software:any[] = [

      { value: 'COPIAR ARCHIVOS'},
      { value: 'ERROR AL ABRIR UN ARCHIVO' },
      { value: 'INSTALAR MS OFFICE' },
      { value: 'INSTALAR PROGRAMA ESPECIFICO' },

      ];


       //network

      network:any[] = [
      { value:'CABLE DE RED'},
      { value: 'NUEVO PUNTO DE RED' },
      { value: 'CONFIGURAR PUNTO DE RED' },
      { value: 'ASISTENCIA DE LOS PATINILLOS' },

      ];

      //ups

      ups:any[] = [

      { value: 'UPS NO ENCIENDE' },
      { value: 'MANTIENE UN PITIDO CONSTANTE' },
      { value: 'CAMBIO DE UPS' },

      ];

      //virus

      virus:any[] = [

      { value: 'COMPUTADOR INFECTADO' },

      ];

      //attendance

      attendance:any[] = [

      { value: 'ASISTENCIA SALÓN DE CONFERENCIAS' },
      { value: 'INSTALACIÓN PROYECTOR'},
      { value: 'RESERVACION DE VIDEO CONFERENCIA' },
      { value: 'RESERVACION DE VIDEO CONFERENCIA' },


      ];

      //ventanillaVirtual

      ventanilla:any[] = [

      { value: 'GENERAL' },


      ];

      selectedService : any;
      SelectedServiceOption: any; // creacion usuarios


      onOptionSelected(selectedValue: string) {

        this.selectedService = selectedValue;
        this.SelectedServiceOption = selectedValue;
        // Perform any further actions based on the selected value
      }



}
