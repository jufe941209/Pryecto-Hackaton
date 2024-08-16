import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-encuesta1',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './encuesta1.component.html',
  styleUrl: './encuesta1.component.css'
})
export class Encuesta1Component implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      companyName: ['', Validators.required],
      ciiu: ['', Validators.required],
      sectorDescription: ['', Validators.required],
      resourceUse: ['', Validators.required],
      creditValue: ['', Validators.required],
      creditExclusion: ['', Validators.required],
      hasEnvironmentalDept: ['', Validators.required],
      hasASPersonnel: ['', Validators.required],
      hasEnvironmentalPolicies: ['', Validators.required],
      hasISO14001: ['', Validators.required],
      hasLegalMatrix: ['', Validators.required],
      preventsImpacts: ['', Validators.required],
      hasComplaintMechanism: ['', Validators.required],
      compliesLaborLaw: ['', Validators.required],
      conductsSupervision: ['', Validators.required],
      managesWaste: ['', Validators.required],
      preventsIncidents: ['', Validators.required],
      emergencyPlan: ['', Validators.required],
      hasCompensationPlan: ['', Validators.required],
      socialResponsibility: ['', Validators.required],
      projectCategory: ['', Validators.required],
      infrastructureType: ['', Validators.required],
      developmentZone: ['', Validators.required],
      landUse: ['', Validators.required],
      executionTime: ['', Validators.required],
      environmentalFactors: ['', Validators.required],
      zoneSpecification: ['', Validators.required],
      preConsultation: ['', Validators.required],
      communitySpec: ['', Validators.required],
      biodiversityValuation: ['', Validators.required],
      valuationExplanation: ['', Validators.required],
      infoVerification: ['', Validators.required],
      infoVerificationDetails: ['', Validators.required],
      impactInfo: ['', Validators.required],
      consent: ['', Validators.required],
      communityParticipation: ['', Validators.required],
      communityParticipationDetails: ['', Validators.required],
      diagnosticRequired: ['', Validators.required],
      licenseRequired: ['', Validators.required],
      licenseStatus: ['', Validators.required],
      environmentalAuthority: ['', Validators.required],
      resolutionNumber: ['', Validators.required],
      otherPermits: ['', Validators.required],
      diligenciadorName: ['', Validators.required],
      diligenciadorPosition: ['', Validators.required],
      diligenciadorId: ['', Validators.required],
      diligenciadorDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Eliminado: Se eliminaron las suscripciones a valueChanges y statusChanges para zones
  }

  onRegister() {
    if (this.signUpForm.invalid) {
      alert('Debe completar todos los campos.');
      return;
    }

    console.log('Formulario completado correctamente', this.signUpForm.value);
    // Aquí puedes realizar la acción que desees
  }
}