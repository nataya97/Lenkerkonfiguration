package service;

import com.lenker.Lenkerkonfiguration.entity.Griff;
import dao.GriffDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GriffService {

    @Autowired
    GriffDao griffDao;

    public List getAllGriffe() {
        List griffList = this.griffDao.findAll();
        return griffList;
    }

    public void setGriffDao(GriffDao griffDao) {
        this.griffDao = griffDao;
    }

    public Griff addGriff(Griff griff) {
        return this.griffDao.save(griff);
    }
}
