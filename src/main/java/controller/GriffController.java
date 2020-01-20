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

    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/griff")
    public Griff griff(@RequestParam(value="griff", defaultValue = "saft") String name) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        return new Griff(counter.incrementAndGet(), String.format(name));
    }

    @RequestMapping(value = "/griff", method = RequestMethod.GET)
    public List<Griff> getAllGriffe() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        return griffService.getAllGriffe(); }

    @PutMapping(path = {"/add"} )
    public Griff addNewLenker(@RequestBody Griff griff) { return this.griffService.addGriff(griff); }
}
