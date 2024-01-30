
/*Next.js において .env ファイルを使用する際、環境変数に NEXT_PUBLIC_ プレフィックスを付けるかどうかは重要な違いを生じさせます。具体的には、このプレフィックスの有無によって、環境変数がクライアントサイド（ブラウザ）で利用可能かどうかが決まります。

NEXT_PUBLIC_ プレフィックスを付ける場合
クライアントサイドでアクセス可能: NEXT_PUBLIC_ プレフィックスが付いた環境変数は、サーバーサイドだけでなく、クライアントサイド（ブラウザ）でもアクセス可能です。これは、公開情報（例えば、APIの公開エンドポイント）を保存するのに便利です。
セキュリティの考慮: これらの変数はビルド時にアプリケーションに埋め込まれ、ブラウザに送信されるため、敏感な情報（例えば、APIキー）はここに置かないように注意が必要です。
NEXT_PUBLIC_ プレフィックスを付けない場合
サーバーサイドのみでアクセス可能: プレフィックスがない環境変数はサーバーサイド（Node.js環境）でのみアクセス可能です。これらはクライアントサイドのコードに含まれません。
セキュリティ上の安全性: APIキーのような機密情報は、この方法で保管するのが安全です。クライアントに公開されることはありません。
使用例
.env ファイルの例：

makefile
Copy code
# クライアントサイドで利用可能
NEXT_PUBLIC_API_ENDPOINT=https://api.example.com

# サーバーサイドでのみ利用可能
SECRET_API_KEY=secret-key-123

---------------------------------------------------------------------------------
usePathname
usePathname フックは、現在のページのパス名（URLのドメイン名に続く部分）を返します。
例えば、URLが https://example.com/products/shoes であれば、usePathname は /products/shoes を返します。
useSearchParams
useSearchParams フックは、URLのクエリパラメータ（? に続く部分）を操作するためのインターフェースを提供します。
このフックは、URLのクエリパラメータを読み取ったり、変更したりするために使用されます。
例えば、URLが https://example.com/products?category=shoes&color=red であれば、useSearchParams を使用して category や color などのクエリパラメータにアクセスできます。
出力例
jsx
Copy code
import { usePathname, useSearchParams } from 'next/navigation';

const MyComponent = () => {
  const pathname = usePathname();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <p>Pathname: {pathname}</p>
      <p>Search Params: {JSON.stringify(Object.fromEntries(searchParams))}</p>
    </div>
  );
};


*/