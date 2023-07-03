
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

  //campo 5
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

  // campo 13

  accessDetail:any[] = [

    { value: 'CREACION DE USUARIO' },
    { value: 'USUARIO BLOQUEADO' },
    { value: 'CAMBIO DE CONTRASEÑA' },
    { value: 'DESHABILITACION DE USUARIO' },
    { value: 'CREACIÓN DE CARPETA COMPARTIDA' },
    { value: 'ACCESO A CARPETA COMPARTIDA' },
    { value: 'ACCESO A VENTANILLA' },
    { value: 'ACCESO A SIGEF' },
    { value: 'ACCESO A ASLAN' },
    { value: 'ACCESO A SISTEMA DE RECEPCIÓN DE VISITAS' },
    { value: 'ACCESO A VPN' },
    { value: 'ACTUALIZACIÓN DE INFORMACIÓN' },
    { value: 'CONFIGURACIÓN DE USUARIO EN EQUIPO' },
  ];







  options = [
    { value: 'option1', label: 'Option 1', fields: [
      { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' }
    ] },
    { value: 'option2', label: 'Option 2', fields: [
      { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' },
      { label: 'Field 2', type: 'number', value: null, placeholder: 'Enter Field 2' }
    ]},
    { value: 'option3', label: 'Option 3', fields: [
      { label: 'Field 3', type: 'text', value: '', placeholder: 'Enter Field 3' }
    ]}
  ];




optionsService = [
  { value: 'option1', label: 'Option 1', fields: [
    { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' }
  ] },
  { value: 'option2', label: 'Option 2', fields: [
    { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' },
    { label: 'Field 2', type: 'number', value: null, placeholder: 'Enter Field 2' }
  ]},
  { value: 'option3', label: 'Option 3', fields: [
    { label: 'Field 3', type: 'text', value: '', placeholder: 'Enter Field 3' }
  ]}
];
selectedOption: any;
serviceDetail : any;
selectedServiceOption: any;

  onOptionSelected(selectedValue: string) {
    this.selectedOption = this.options.find(option => option.value === selectedValue);
  }




}
