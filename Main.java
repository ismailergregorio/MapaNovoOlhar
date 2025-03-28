package testemapa;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.io.File;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) {
        // Criar o WebView
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();

        // Carregar o arquivo HTML local do mapa
        File file = new File("src/testemapa/map.html");  // Verifique se o caminho está correto!
        webEngine.load(file.toURI().toString());

        // Criar a cena e adicionar ao Stage
        StackPane root = new StackPane();
        root.getChildren().add(webView);
        Scene scene = new Scene(root, 800, 600);

        primaryStage.setTitle("Mapa OpenStreetMap com Marcadores Personalizados");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
