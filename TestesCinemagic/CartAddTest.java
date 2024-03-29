
// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import java.lang.Thread;

import static org.junit.Assert.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

import java.util.*;

public class CartAddTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;

  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }

  @After
  public void tearDown() {
    driver.quit();
  }

  @Test
  public void cartAdd() {
    driver.get("http://localhost:3000/products/cart");
    driver.findElement(By.cssSelector(".fa-plus > .svg-inline--fa")).click();
    driver.findElement(By.cssSelector(".movie-list-item:nth-child(2) > .product-buy-btn")).click();
    sleep();
    assertEquals("Criado com sucesso!", driver.findElement(By.cssSelector(".swal-text")).getText());
    String resultado = driver.findElement(By.cssSelector(".swal-text")).getText();
    String resuEsperado = "Criado com sucesso!";
    System.out.println("O resultado foi: " + resultado + "\n" + "O resultado esperado era: " + resuEsperado);
    driver.findElement(By.cssSelector(".swal-button")).click();
    driver.findElement(By.cssSelector(".movie-list-item:nth-child(4) > .product-buy-btn")).click();
    sleep();
    assertEquals("Criado com sucesso!", driver.findElement(By.cssSelector(".swal-text")).getText());
    resultado = driver.findElement(By.cssSelector(".swal-text")).getText();
    System.out.println("O resultado foi: " + resultado + "\n" + "O resultado esperado era: " + resuEsperado);
    driver.findElement(By.cssSelector(".swal-button")).click();
    driver.findElement(By.cssSelector(".cart-picture")).click();
  }

  public void sleep() {
    try {
      Thread.sleep(3000); // espera por 3 segundos
    } catch (InterruptedException e) {
      // tratar a exceção, se necessário
    }
  }
}
