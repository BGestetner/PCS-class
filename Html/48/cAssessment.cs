namespace ShirtGenerator {
    internal class Shirt {
        string color;
        string pattern;
        public Shirt(string color, string pattern) {
            this.color = color;
            this.pattern = pattern;
            
        }
        public override string ToString() {
            return $"{color}: {pattern}";
        }





    }
    internal class ShirtGenerator {
        static string[] colors = [ "red", "green", "blue", "black", "gray" ];
        static string[] patterns = ["solid", "checkered", "plaid", "striped"];
        static void Main(string[] args) {
            GenerateShirtsAndPrintThem();
        }
        static void GenerateShirtsAndPrintThem() {
            foreach (string c in colors) {
                foreach (string p in patterns) {
                    Shirt s = new Shirt(c, p);
                    Console.WriteLine(s);

                }
            }
        }
    }
}
