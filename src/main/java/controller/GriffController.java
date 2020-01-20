package controller;

import com.lenker.Lenkerkonfiguration.entity.Griff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import service.GriffService;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin(origins = "https://www.maripavi.at")
@RestController
@RequestMapping("/produkt/griff")
public class GriffController {

    @Autowired
    GriffService griffService;
    
}
