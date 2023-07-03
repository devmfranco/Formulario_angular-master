
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
  }
   areas = {
    desViceMinistro : 'Despacho del Vice-Ministro',
    Vicomex:'Viceministerio Comercio Exterior',
    VCI:'Viceministerio Comercio Interno',
    VDI:'Viceministerio Desarrollo Industrial',
    PYMES:'Viceministerio Fomento Pequeña y Media Emp.',
    Vizfre:'Viceministerio Zonas Francas y Regimenes Esp.',
    dirAdm:'Dirección Administrativa',
    dirFinanciera:'Dirección Administrativa',
    dirComercioExt:'Dirección Financiera',
    dirComercioInt:'Dirección Comercio Interno',
    dirControlGestion:'Dirección Control de Gestión',
    dirComb:'Dirección de Combustibles',
    dirCom:'Dirección de Comunicaciones',
    dirAnalisisEco:'Dirección de Análisis Económico',
    dirIng:'Dirección de Ingeniería',
    dirRRHH:'Dirección de Recursos Humanos',
    dirTecnologia:'Dirección de Tecnología',
    dirJuridica:'Dirección Jurídica',
    dirPlanReg:'Dirección Plan Regulador',
    dirPlanificacion:'Dirección Planificación y Desarrollo',
    DAIC:'Dirección de Atención Integral al Cliente',
    dirTratadosComerciales:'Dirección De Administración De Acuerdos Y Tratados Comerciales Internacionales',
    dirComercioExterior:'',
    dirEmp:'Dirección De Emprendimiento',
    DOSAC:'Dirección de Operaciones de Supervisión de Actividades Comerciales',
    dirEconomiaIndust:'Dirección De Economía Industrial',
    dirApoyoPymes:'Dirección De Servicios De Apoyo A Las Mipymes',
    dptoCompras:'Dpto. Compras y Contrataciones',
    dptoAdmRRHH:'Dpto. de Administración de Recursos Humanos',
    dptoContab:'Dpto. de Contabilidad',
    dptoGestionDoc:'Dpto. de Gestión Documental',
    dptoServGen:'Dpto. de Servicios Generales',
    deptoTesoreria:'Dpto. de Tesorería',
    deptoDesarrolloHum:'Dpto. Desarrollo Humano y Planes de Carrera',
    dptoRelPub:'Dpto. Relaciones Publicas y Pub.',
    dptoServPerso:'Dpto. Servicio Personal y Relaciones Lab.',
    dptoPrensa:'Dpto. Prensa',
    dptoServPresen:'Dpto. de Servicios Presenciales',
    dptoServLinea:'Dpto. de Servicios en línea',
    dptoAcceInfo:'Dpto.  de Acceso A La Información',
    divArchCentral:'División Archivo Central',
    divCentroDoc:'División Centro de Documentación',
    divAlmSum:'División de almacén y Suministro',
    divSegInt:'División de Seguridad Interna',
    divTransp:'División de Transportación',
    mntoreoControlInt:'Monitoreo y Control Interno',
    OAI:'Oficina de Acceso a la Información',
    OEG:'Oficina de Acceso a la Información',
    seccCorresp:'Sección de Correspondencia',
    seccMant:'Sección Mantenimiento',
    seccMayord:'Sección Mayordomia',
    consultMedic:'Consultorio Medico',
    coopemic:'Coopemic',




   }

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
