package com.xtraVision.backend.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.xtraVision.backend.entity.Service;

public interface ServiceRepository extends JpaRepository<Service, Long> {

}
