package com.xtraVision.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xtraVision.backend.entity.Service;
import com.xtraVision.backend.service.ServiceService;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = {"https://xtravision-3.onrender.com",
						"http://localhost:5173"
						})
public class ServiceController {

	@Autowired
	private ServiceService serviceService;
	
	@PostMapping
	public void createService(@RequestBody Service service)
	{
		serviceService.createService(service);
	}
	@DeleteMapping("/{id}")
	public void deleteService(@PathVariable Long id)
	{
		serviceService.deleteService(id);
	}
	@PutMapping("/{id}")
	public Service updateService(@PathVariable Long id,@RequestBody Service service)
	{
		return serviceService.updateService(id, service);
	}
	@GetMapping
	public List<Service> getAllServices()
	{
		return serviceService.getAllServices();
	}
	@GetMapping("/{id}")
	public Service getServiceById(@PathVariable Long id)
	{
		return serviceService.getServiceById(id);
	}
}
