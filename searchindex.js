Search.setIndex({docnames:["apidoc/lidar_prod","apidoc/lidar_prod.commons","apidoc/lidar_prod.tasks","background/production_process","configs","guides/development","guides/thresholds_optimization","index","introduction","tutorials/install_and_use"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["apidoc/lidar_prod.rst","apidoc/lidar_prod.commons.rst","apidoc/lidar_prod.tasks.rst","background/production_process.md","configs.rst","guides/development.md","guides/thresholds_optimization.md","index.rst","introduction.md","tutorials/install_and_use.md"],objects:{"lidar_prod.commons":[[1,0,0,"-","commons"]],"lidar_prod.commons.commons":[[1,1,1,"","eval_time"],[1,1,1,"","extras"],[1,1,1,"","ignore_warnings"],[1,1,1,"","print_config"]],"lidar_prod.commons.commons.print_config.params":[[1,2,1,"","cfg_print_path"],[1,2,1,"","config"],[1,2,1,"","resolve"]],"lidar_prod.run":[[0,1,1,"","main"]],"lidar_prod.tasks":[[2,0,0,"-","building_completion"],[2,0,0,"-","building_identification"],[2,0,0,"-","building_validation"],[2,0,0,"-","building_validation_optimization"],[2,0,0,"-","cleaning"],[2,0,0,"-","utils"]],"lidar_prod.tasks.building_completion":[[2,3,1,"","BuildingCompletor"]],"lidar_prod.tasks.building_completion.BuildingCompletor":[[2,4,1,"","prepare_for_building_completion"],[2,4,1,"","run"],[2,4,1,"","update_classification"]],"lidar_prod.tasks.building_completion.BuildingCompletor.run.params":[[2,2,1,"","src_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.building_completion.BuildingCompletor.update_classification.params":[[2,2,1,"","prepared_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.building_identification":[[2,3,1,"","BuildingIdentifier"]],"lidar_prod.tasks.building_identification.BuildingIdentifier":[[2,4,1,"","prepare"],[2,4,1,"","run"]],"lidar_prod.tasks.building_identification.BuildingIdentifier.prepare.params":[[2,2,1,"","src_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.building_identification.BuildingIdentifier.run.params":[[2,2,1,"","src_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.building_validation":[[2,3,1,"","BuildingValidationClusterInfo"],[2,3,1,"","BuildingValidator"],[2,1,1,"","request_bd_uni_for_building_shapefile"],[2,3,1,"","thresholds"]],"lidar_prod.tasks.building_validation.BuildingValidationClusterInfo":[[2,5,1,"","entropies"],[2,5,1,"","overlays"],[2,5,1,"","probabilities"],[2,5,1,"","target"]],"lidar_prod.tasks.building_validation.BuildingValidator":[[2,4,1,"","prepare"],[2,4,1,"","run"],[2,4,1,"","setup"],[2,4,1,"","update"]],"lidar_prod.tasks.building_validation.BuildingValidator.run.params":[[2,2,1,"","src_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.building_validation.thresholds":[[2,5,1,"","min_confidence_confirmation"],[2,5,1,"","min_confidence_refutation"],[2,5,1,"","min_entropy_uncertainty"],[2,5,1,"","min_frac_confirmation"],[2,5,1,"","min_frac_confirmation_factor_if_bd_uni_overlay"],[2,5,1,"","min_frac_entropy_uncertain"],[2,5,1,"","min_frac_refutation"],[2,5,1,"","min_uni_db_overlay_frac"]],"lidar_prod.tasks.building_validation_optimization":[[2,3,1,"","BuildingValidationOptimizer"],[2,1,1,"","constraints_func"]],"lidar_prod.tasks.building_validation_optimization.BuildingValidationOptimizer":[[2,4,1,"","evaluate"],[2,4,1,"","optimize"],[2,4,1,"","prepare"],[2,4,1,"","run"],[2,4,1,"","set_thresholds_from_pickle_if_available"],[2,4,1,"","setup"],[2,4,1,"","update"]],"lidar_prod.tasks.cleaning":[[2,3,1,"","Cleaner"]],"lidar_prod.tasks.cleaning.Cleaner":[[2,4,1,"","run"]],"lidar_prod.tasks.cleaning.Cleaner.run.params":[[2,2,1,"","src_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.utils":[[2,3,1,"","BDUniConnectionParams"],[2,1,1,"","get_a_las_to_las_pdal_pipeline"],[2,1,1,"","get_bbox"],[2,1,1,"","get_integer_bbox"],[2,1,1,"","get_las_metadata"],[2,1,1,"","get_pdal_reader"],[2,1,1,"","get_pdal_writer"],[2,1,1,"","pdal_read_las_array"],[2,1,1,"","run_pdal_info"],[2,1,1,"","split_idx_by_dim"]],"lidar_prod.tasks.utils.BDUniConnectionParams":[[2,5,1,"","bd_name"],[2,5,1,"","host"],[2,5,1,"","pwd"],[2,5,1,"","user"]],"lidar_prod.tasks.utils.get_a_las_to_las_pdal_pipeline.params":[[2,2,1,"","ops"],[2,2,1,"","src_las_path"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.utils.get_bbox.params":[[2,2,1,"","buffer"],[2,2,1,"","las_path"]],"lidar_prod.tasks.utils.get_pdal_reader.params":[[2,2,1,"","las_path"]],"lidar_prod.tasks.utils.get_pdal_writer.params":[[2,2,1,"","extra_dims"],[2,2,1,"","target_las_path"]],"lidar_prod.tasks.utils.pdal_read_las_array.params":[[2,2,1,"","las_path"]],lidar_prod:[[0,0,0,"-","run"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","parameter","Python parameter"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:parameter","3":"py:class","4":"py:method","5":"py:attribute"},terms:{"0":[2,4],"05":4,"1":[2,3,4,6],"10":4,"110":4,"111":4,"112":4,"113":4,"114":4,"115":4,"12345":4,"15km\u00b2":[3,6],"19":4,"20":4,"200":4,"2002":6,"202":4,"208":4,"21":4,"214":4,"25":4,"28de":4,"300":4,"35":4,"4":2,"5":[2,3,4],"50":4,"5041941489707767":4,"5894477997785892":4,"5m":3,"6":4,"6400365762003571":4,"7271206406484895":4,"7477148092712739":4,"75":2,"779844069887882":4,"7979734453001499":4,"8":2,"884546947499147":4,"91":3,"93":2,"95":4,"98":[3,4,6],"break":6,"class":[2,6,7,8],"default":[2,3,7,9],"final":[4,6],"float":[2,4],"function":1,"int":2,"km\u00b2":6,"new":[2,5],"public":[2,6,7,8],"return":2,"true":[1,2,4,6,9],"while":[7,8],A:6,AND:3,As:6,By:9,For:[3,6,9],IF:2,If:6,In:[2,5,6],Its:[7,8],OR:[2,3],The:[2,3,5,6,7,8,9],Then:2,There:6,These:6,Theses:6,To:[2,6,9],_args_:4,_target_:4,a_confirm:4,a_refut:4,abl:6,about:[2,6],abov:3,access:2,accordingli:2,action:5,activ:[5,6,9],actual:6,adapt:2,add:[2,6],addit:9,address:[7,8],aerial:3,after:6,ai:[2,6,7,8],ai_building_identifi:4,ai_building_proba:[4,9],aim:[3,7,8],al:6,algorithm:[2,3,6,7,8],all:[2,6],almost:6,alreadi:3,also:[2,5,6,7,8,9],alwai:5,ambigu:3,among:[3,6],an:[5,6,9],anaconda:9,ani:[2,6],anoth:[6,9],anyth:6,anywher:9,app:[5,6,7],appli:0,applic:[2,4,7,8],approach:[6,7,8],apt:9,ar:[2,4,5,6,7,8,9],area:[2,3,7,8],arrai:2,ascend:2,assign:2,attribut:2,augment:[7,8],auto_precision_recal:4,autom:[3,6,7,8],avoid:2,balanc:[6,7,8],base:[2,3,6,7,8],basenam:6,bash:[5,9],basi:2,bbox:2,bd:2,bd_name:[2,4],bd_param:2,bd_uni_connection_param:[2,4],bd_uni_request:[2,4],bdtopooverlai:4,bduni:[2,7,8],bduni_france_consult:4,bduniconnectionparam:[2,4],been:3,befor:[5,6],being:[2,3,6,7,8],belong:3,best_trial:4,better:6,between:[6,7,8],bool:[1,2],both:2,both_confirm:4,both_unsur:4,bound:2,box:2,branch:[5,9],buffer:[2,4],build:[2,4,7,8,9],building_complet:4,building_identif:4,building_valid:[4,6],building_validation_optim:4,building_validation_thresholds_pickl:[2,4,6],buildingcompletor:[2,4],buildingidentifi:[2,4],buildings_correction_label:[2,4,6],buildingvalid:[2,4,6],buildingvalidationclusterinfo:[2,6],buildingvalidationoptim:[2,4,6],bulding_valid:6,c1:[3,6],c2:[3,6],callabl:1,can:[3,5,6,7,8,9],candid:[2,3,4,6],candidate_buildings_flag:4,capabl:6,captur:3,care:6,cast:2,cd:9,cfg_print_path:1,channel:[2,6,9],check:[0,5],choic:6,chosen:[3,6],cid_candidateb:4,cid_isolatedorconfirm:4,clasif:6,classif:[2,3,4,6,7,8],clean:4,cleaner:[2,4],clone:9,cloud:[2,6,7,8,9],cluser:2,cluster:[2,3,4,6],cluster_id:4,clusterid:[2,4],clusterid_candidate_build:4,clusterid_isolated_plus_confirm:4,code:[2,4,5,6],cohes:6,color:9,column:2,com:9,comma:9,command:6,common:7,complet:2,compliant:6,compon:3,compos:1,comput:[2,6],conda:[5,6,9],confid:[3,6],config:[0,1,4,9],config_tre:1,configur:[0,1,6,7,9],confirm:[2,3,6],confirmation_accuraci:4,confus:6,confusion_matrix_no_norm:4,confusion_matrix_norm:4,connect:[2,3,6],consid:[2,3],consist:6,constrain:6,constraint:[4,6],constraints_func:[2,4],consum:6,contain:9,content:1,control:9,convent:5,coordin:2,correct:[6,7,8],could:6,coupl:6,cr:3,creat:[2,5,9],create_studi:4,credenti:2,criteria:6,criterion:6,cross:2,crossover_prob:4,current:[3,7,8],cwd:4,data:6,data_format:[2,4,6,9],databas:[2,3,7,8,9],databs:6,dataclass:6,dataformat:2,dataset:[2,3,6,7,8],db_overlayed_onli:4,deb:6,debug:[2,6],decis:[2,3,7,8],decor:1,dedic:6,deep:[3,6,7,8],defin:[2,3,5,6],depend:[6,7,8],deriv:6,describ:6,deseri:6,design:[2,4],destruct:2,detail:[2,4],detailed_to_fin:4,detect:6,dev:5,develop:[6,7],dict:2,dictconfig:[0,1],dictionnari:2,differ:[6,7,8,9],dim:2,dim_arrai:2,dimens:[2,3,7,8],direct:4,directli:[5,9],directori:6,distinguish:6,divers:6,document:[5,9],doe:6,down:6,due:3,durat:1,dure:6,e1:3,e2:3,e:[2,3,5,6,9],each:[3,6],edit:3,effici:6,either:0,element:[2,7,8],elitist:6,elsewis:[2,3],empir:6,end:3,enough:[2,3],ensur:[7,8],entri:[0,7,8],entropi:[2,3,4,6,9],env:[5,9],environ:[6,9],equal:6,error:[6,7,8],et:6,etc:3,eval_tim:1,evalu:[2,4,5,7],everi:2,exclud:2,expand:2,expect:2,express:3,extens:[7,8],extra:[1,2,3],extra_dim:[2,4],extract:[2,6],f_candidateb:4,factor:3,fall:2,fals:[2,4,6],false_neg:4,false_posit:4,fashion:3,fast:[5,6],featur:5,few:2,field:1,file:[0,2,4,5,6],file_1:9,file_2:9,file_3:9,fill:2,filter:2,first:3,flag:[2,6,9],focus:6,folder:[4,6,9],follow:[2,5,6],format:[2,6,9],former:2,forward:[2,5],found:[2,3,6,7,8],fr:4,from:[2,3,6,9],front:6,full:5,functionn:5,functool:4,furthermor:6,fuse:[7,8],g:[2,3,5],gener:[5,6],genet:[6,7,8],geograph:[7,8],geometr:3,get:[2,9],get_a_las_to_las_pdal_pipelin:2,get_bbox:2,get_integer_bbox:2,get_las_metadata:2,get_method:4,get_pdal_read:2,get_pdal_writ:2,git:9,github:9,give:6,glanc:4,goal:3,ground:3,group:[2,3,4,6],group_build:4,group_info:4,group_info_pickle_path:4,group_no_build:4,group_unsur:4,groups_count:4,h:9,have:[2,3,6],help:6,here:4,high:[2,3,5,7,8],higher:[3,6],highli:6,highlight:[3,7,8],host:[2,4],how:[6,7],http:9,human:[3,7,8],hydra:[1,4,9],hyperparamet:[3,6],i:6,ia_confirmed_onli:4,ia_refut:4,ia_refuted_but_under_db_uni:4,id:2,identif:2,identifi:[2,3],ign:4,ignf:9,ignore_warn:[1,4],ii:6,implement:5,impos:2,in_la:2,includ:[2,6],increas:6,index:[3,7],indic:[2,6],individu:9,info:2,inform:[2,4,6,7,8],input:[2,3,4],input_las_dir:[4,6],inspect:[3,5],instal:[5,6,7],instanc:6,instead:5,integ:2,interest:2,intermediari:6,intern:6,introduc:6,invit:4,is3d:4,isol:[2,3],iter:2,its:[1,7,8],jointli:6,keep:[2,6],keyword:6,know:6,la:[2,3,4,5,6,9],label:6,lamber:2,larg:6,larger:6,las_dimens:[4,6,9],las_path:2,later:2,learn:[3,6,7,8],level:[2,3,5,6],leverag:3,librari:[1,6,7,8],lidar:[3,6,8,9],lidar_prod:[4,5,6,7,9],like:2,line:[6,9],list:[2,6],live:6,local:9,log:1,logic:2,lower:6,m:9,made:6,mai:[3,6,9],main:[0,7,8],make:[3,6],manag:4,manual:9,mark:3,match:[5,6,9],matric:6,max:2,maxim:[3,4,6],md:2,mean:[2,7,8],meet:[3,6],merg:[2,5],metadata:2,method:1,metric:[2,4,6],metric_nam:2,metric_valu:2,might:[6,7,8],min:2,min_automation_constraint:4,min_building_proba:[2,4],min_building_proba_relaxation_if_bd_uni_overlai:[2,4],min_confidence_confirm:[2,4],min_confidence_refut:[2,4],min_entropy_uncertainti:[2,4],min_frac:4,min_frac_confirm:[2,4],min_frac_confirmation_factor_if_bd_uni_overlai:[2,4],min_frac_entropy_uncertain:[2,4],min_frac_refut:[2,4],min_point:4,min_precision_constraint:4,min_recall_constraint:4,min_uni_db_overlay_frac:[2,4],minim:[7,8],minut:6,miss:[3,7,8],mode:6,model:[3,6,7,8],modul:[6,7,9],more:[4,6],most:6,much:[3,6],multi:[3,6,7,8],multiclass:[7,8],multiobject:6,multirun:9,must:6,mutation_prob:4,n:6,n_trial:4,name:[2,3,9],ndarrai:2,necessari:[2,6],need:[2,5,6,7,8,9],neg:6,network:[7,8],neural:[7,8],nevertheless:3,newli:3,non:2,none:[1,2],not_build:4,now:[7,8],np:2,nsga:6,nsgaiisampl:4,number:[2,6],numpi:2,o1:3,object:[2,3,6,7,8],occur:6,omegaconf:[0,1],onc:6,one:[6,7,8,9],ones:2,onli:[2,6,7,8],op:2,oper:[2,6],optim:[0,2,3,4,7,8],optimized_threshold:[4,6],option:[1,2],optuna:[2,4,6],order:2,origin:6,other:[3,6,7,8],otpim:6,our:[7,8],out:2,out_stats_json:2,output:[2,4,5,6,9],output_dir:[4,9],overlai:[2,3,6],overrid:[2,9],overriden:9,p:[2,3],p_auto:4,p_confirm:4,p_refut:4,p_unsur:4,packag:[3,5],param:6,paramet:[1,2,6,9],pareto:6,part:2,partial:4,particular:6,path:[2,4,5,6,9],pdal:2,pdal_read_las_arrai:2,per:[2,6],percentag:[3,6],perform:[2,3,6],pickl:[2,4,6],pip:9,pipe:2,pipelin:2,pkl:4,plan:3,plane:3,point:[0,2,6,7,8,9],pool:6,population_s:4,posit:6,possibl:3,postgi:9,potenti:[2,3,5],precis:[3,4,6],predict:[6,7,8,9],prepar:[2,4,6],prepare_for_building_complet:2,prepared_las_dir:4,prepared_las_path:2,presenc:2,preserv:2,pretti:9,previou:[2,3,6],previous:[2,3],print:[1,9],print_config:[1,4,9],probabl:[2,3,6,7,8,9],process:[2,5,6,7],prod:[5,6,8,9],produc:[3,6,7,8],product:[5,6,7,8,9],project:9,properli:9,proport:[3,6],proportion_of_automated_decis:4,proportion_of_confirm:4,proportion_of_refut:4,proportion_of_uncertainti:4,provid:6,pull:5,pwd:[2,4],py:[5,6,7,8],python:[5,6,9],qualiti:[7,8,9],quantiti:6,r1:3,r2:3,ran:6,reach:6,read:2,reader:2,readi:5,readm:2,recal:[3,4,6],reduc:[3,6],refer:[1,4,6,9],refut:[2,3],refutation_accuraci:4,regress:5,relax:3,releas:5,remain:3,repres:6,request:[2,9],request_bd_uni_for_building_shapefil:2,requet:5,requir:[3,5,7,8,9],rerun:6,reset:2,resolv:1,respect:6,result:[2,6,9],results_output_dir:[4,6],resum:6,rich:1,right:[7,8],robust:6,role:5,rule:[2,3,6,7,8],run:[2,5,7],run_pdal_info:2,runtim:4,s:7,safeguard:3,said:6,same:[2,3,6],sampler:4,save:[1,2,6,9],schema:2,script:9,search:[2,6],section:6,see:[2,9],seed:4,segment:[3,7,8],select:2,semant:[3,5,7,8],sens:6,separ:9,sequenc:2,serial:6,serveurbdudiff:4,set_thresholds_from_pickle_if_avail:2,setup:[2,5],setup_env:[5,9],setup_environ:9,sever:[6,9],sh:[5,9],shapefil:2,shapefile_path:2,share:2,show:4,simpl:[7,8],singl:[5,6],so:[6,7,8],solut:6,some:[2,3],sourc:[0,1,2,4,6,7,8,9],specif:[2,9],specifi:[2,6,9],split_idx_by_dim:2,spot:[5,7,8],sr:2,src_la:[4,5,9],src_las_path:2,stage:5,standard:2,step:[2,3,5,6],store:[2,6],str:[1,2],strategi:[7,8],string:6,structur:1,studi:[2,4],study_nam:4,subfold:6,subset:5,sudo:9,support:9,suppos:3,sure:6,surfac:3,surpris:5,surround:2,swapping_prob:4,syntax:9,take:[7,8],taken:6,tarbal:9,target:2,target_las_path:2,task:[4,6,7],termin:2,thei:6,them:[2,3],therefor:[3,6],thes:9,thi:[3,6,9],those:[2,3,6],three:6,threshod:6,threshold:[0,2,3,4,7,8],through:3,time:6,todo:[2,4,6,7],togeth:[2,3,6,7,8],toler:[3,4],too:[2,3],tool:3,track:6,train:[6,7,8],transform:[2,7],tree:1,trial:2,true_posit:4,tutori:6,two:6,txt:1,type:2,typic:2,uint:4,uncertain:[2,3],uncertainti:[3,7,8],unclust:4,under:[2,6],uni:2,uni_db_overlai:4,union:2,unseen:6,unsur:[3,4,6],unsure_by_entropi:4,unwant:2,up:[3,6],updat:[2,3,4,6,7,8],update_classif:2,updated_las_dir:4,upgrad:9,url:2,us:[1,2,6,7,8],usag:[0,7],use_final_classification_cod:[2,4],user:[2,4],util:4,val:6,valid:[2,7],valu:[2,9],variabl:2,vector:[2,3,6,7,8],vertic:[2,3],via:[3,6,7,8,9],virtual:9,visual:5,volum:6,vuildingvalid:2,wa:6,wall:3,want:6,we:[2,3,4,6,7,8],well:[2,3,6],went:3,were:[2,3,6,7,8],when:[3,5],where:[1,3],whether:1,which:[2,3,5,6,7,8],without:6,workflow:5,write:2,writer:2,www:9,x:2,xmax:2,xmin:2,xy:[2,3],y:2,yaml:9,ymax:2,ymin:2,you:[3,5,6,9],your:[6,9]},titles:["lidar_prod.run","lidar_prod.commons","lidar_prod.tasks","Production process: how are point clouds transformed by the app?","Default configuration","Developer\u2019s guide","Optimization and evaluation of building validation decision thresholds","Lidar-Prod &gt; Documentation","&lt;no title&gt;","Installation and usage [TODO]"],titleterms:{"default":4,A:3,app:3,applic:[5,9],ar:3,b:3,background:7,build:[3,6],building_complet:2,building_identif:2,building_valid:2,building_validation_optim:2,c:3,cicd:5,clean:2,cloud:3,common:1,complet:3,configur:4,decis:6,depend:9,detail:6,develop:5,document:7,evalu:6,file:9,from:5,full:6,get:7,guid:[5,7],how:3,identif:3,implement:6,indic:7,instal:9,lidar:7,lidar_prod:[0,1,2],modul:1,motiv:6,multipl:9,optim:6,packag:[7,9],point:3,process:3,prod:7,product:3,refer:7,requir:6,run:[0,6,9],s:5,sequentiali:9,set:6,sourc:5,start:7,strategi:6,tabl:7,task:2,test:6,threshold:6,todo:9,transform:3,us:[5,9],usag:9,util:[2,6],valid:[3,6],version:5}})