package stepdefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(
		//monochrome=true,
		plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
		//plugin ={"pretty","html:target/cucumber-html","json:target/cucumber.json"},
		features = "src/test/java/features"
		//tags= {"@LoginFeature,@Product"},
		//glue= {"stepdefs"}
		)

public class TestRunner {

}
