import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-edittrainer',
  templateUrl: './edittrainer.component.html',
  styleUrls: ['./edittrainer.component.css']
})
export class EdittrainerComponent implements OnInit {
  trainer={
    name:'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    company:'',
    designation:'',
    ictakcourses:'',
    photo:'',
    ID:''
  }

  name = 'Angular';  

  categories = [  
    {id: 1, name: 'Full Stack Development'},  
    {id: 2, name: 'Data Science and Analytics'},  
    {id: 3, name: 'Robotic Process Automation'},  

  ]; 

  image: any; 

 

  constructor(public trainersObj : TrainerService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {

    
  }
  editTrainers(trainer:any)
  {
    this.trainersObj.editTrainers(this.trainer);
    localStorage.setItem("editTrainerId", trainer._id.toString());
    this.router.navigate(['trainerprofiles']);

  }
}
