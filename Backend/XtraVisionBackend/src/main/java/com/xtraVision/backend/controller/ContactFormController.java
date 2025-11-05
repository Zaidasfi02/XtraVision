package com.xtraVision.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xtraVision.backend.entity.ContactForm;
import com.xtraVision.backend.service.ContactFormService;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins={ "https://xtravision-3.onrender.com",
						"http://localhost:5173"
})
public class ContactFormController {

	@Autowired
	private ContactFormService contactFormService;
	
	@PostMapping
	public void crateContact(@RequestBody ContactForm contactForm)
	{
		contactFormService.addContact(contactForm);
	}
}
