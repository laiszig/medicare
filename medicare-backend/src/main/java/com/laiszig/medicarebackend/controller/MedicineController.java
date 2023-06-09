package com.laiszig.medicarebackend.controller;

import com.laiszig.medicarebackend.controller.request.MedicineRequest;
import com.laiszig.medicarebackend.controller.request.MedicineSearchRequest;
import com.laiszig.medicarebackend.entity.Medicine;
import com.laiszig.medicarebackend.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineController {

    private final MedicineService medicineService;

    @Autowired
    public MedicineController(MedicineService medicineService) {
        this.medicineService = medicineService;
    }

    @GetMapping("/medicines")
    public List<Medicine> getAll() {
        return medicineService.findAll();
    }

    @PostMapping("/addmedicine")
    public ResponseEntity<Medicine> saveMedicine(@RequestBody Medicine medicine) {
        medicineService.saveMedicine(medicine);
        return new ResponseEntity<>(medicine, HttpStatus.CREATED);
    }

    @PostMapping("/searchmedicines")
    public List<Medicine> searchMedicineByCategory(@RequestBody MedicineSearchRequest search) {
        return medicineService.searchByCategory(search.getCategoryId());
    }

    @GetMapping("/medicines/{id}")
    public ResponseEntity<Medicine> getMedicine(@PathVariable Integer id) {
        try {
            Medicine medicine = medicineService.getMedicine(id);
            return new ResponseEntity<>(medicine, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("medicines/{id}")
    public ResponseEntity<Medicine> deleteMedicine(@PathVariable Integer id) {
        try {
            medicineService.deleteMedicine(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("updatemedicine/{id}")
    public ResponseEntity<String> updateMedicine(@PathVariable("id") Integer medicineId, @RequestBody MedicineRequest medicineRequest) {
        medicineService.updateMedicine(medicineId, medicineRequest.getName(), medicineRequest.getPrice(),
                        medicineRequest.getCompany(), medicineRequest.getDescription(), medicineRequest.getCategory());

        return new ResponseEntity<>("Medicine updated successfully", HttpStatus.OK);
    }
}
