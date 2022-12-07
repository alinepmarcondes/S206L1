package aula_inatel.prova;

import com.intuit.karate.junit5.Karate;

class provaRunner {
    
    @Karate.Test
    Karate testPlaceholder() {
        return Karate.run("pv").relativeTo(getClass());
    }    

}