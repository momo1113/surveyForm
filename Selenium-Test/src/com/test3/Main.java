package com.test3;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;


import java.util.concurrent.TimeUnit;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.gecko.driver","/Users/momosun/Desktop/CSC642/Selenium-Test/drivers/chromedriver");

        // if above property is not working or not opening the application in browser then try below property

        //System.setProperty("webdriver.firefox.marionette","G:\\Selenium\\Firefox driver\\geckodriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(40,TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
        driver.get("https://form-9e65f.web.app/");
        System.out.println("Application title is ============="+driver.getTitle());

        driver.findElement(By.xpath("//input[@id = 'name']")).sendKeys("Momo");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id = 'email']")).sendKeys("msun2@mail.sfsu.edu");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id = 'confirmedEmail1']")).sendKeys("msun2@mail.sfsu.edu");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id = 'phone']")).sendKeys("510-688-2673");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id='birthday']")).sendKeys("10/08/2000");
        Thread.sleep(2000);



        //education
        Select education= new Select(driver.findElement(By.id("education")));
        education.selectByVisibleText("Some College");

        //height
        Select feet = new Select(driver.findElement(By.id("height-feet")));
        feet.selectByVisibleText("5");

        //in
        Select in = new Select(driver.findElement(By.id("height-in")));
        in.selectByVisibleText("5");
        Thread.sleep(2000);

        //address
        driver.findElement(By.xpath("//input[@id='address']")).sendKeys("5 scotia ave");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id='city']")).sendKeys("San Francisco");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id='state']")).sendKeys("California");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//input[@id='zip']")).sendKeys("94109");

        Thread.sleep(2000);
        driver.findElement(By.id("agreement")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("button")).click();
        Thread.sleep(10000);


        driver.quit();
    }
}
