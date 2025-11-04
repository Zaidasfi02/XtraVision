package com.xtraVision.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.xtraVision.backend.entity.Service;
import com.xtraVision.backend.repository.ServiceRepository;

@org.springframework.stereotype.Service
public class ServiceService {
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	public void createService(Service service)
	{
		serviceRepository.save(service);
	}
	
	public void deleteService(Long id)
	{
		serviceRepository.deleteById(id);
	}
	public Service updateService(Long id,Service service)
	{
		Service existing=serviceRepository.findById(id).orElseThrow(()->new RuntimeException("Service not found by this id"+id));
		existing.setDescription(service.getDescription());
		existing.setTitle(service.getTitle());
		existing.setIconUrl(service.getIconUrl());
		return serviceRepository.save(existing);
	}
	public List<Service> getAllServices() {
	    return serviceRepository.findAll();
	}
	public Service getServiceById(Long id)
	{
		return serviceRepository.findById(id).orElseThrow(()->new RuntimeException("Service not found by this id"+id));
	}


}
