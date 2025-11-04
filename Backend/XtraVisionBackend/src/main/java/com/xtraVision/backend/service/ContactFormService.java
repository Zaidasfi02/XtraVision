package com.xtraVision.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xtraVision.backend.entity.ContactForm;
import com.xtraVision.backend.repository.ContactFormRepository;

@Service
public class ContactFormService {
	
	@Autowired
	private ContactFormRepository contactFormRepository;
	
	public void addContact(ContactForm contactForm)
	{
		contactFormRepository.save(contactForm);
	}

}
