
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

-------------------------------
余白を引き延ばす➡flex-grow


--------------------------------

カスタムの背景色のグラディエント
'custom-gradient':
          'linear-gradient(90deg, #1D262E 0%, #063761 50%, #1D262E 100%)',

bg-gradient-to-bl from-blue-900 via-gray-900 to-slate-900'


------------------------------------------------------------

<div class="relative">
  <div class="absolute inset-y-0">
    この要素は親要素の上端と下端に沿って配置されます。
  </div>
</div>


------------------------------------------------------------
要素のテキストサイズを動的に調整するためには、CSSのvw（viewport width）単位を使用することが一つの方法です。vwはビューポートの幅に対する相対的な単位で、1vwはビューポート幅の1%に相当します。これを使用すると、ビューポートの幅に応じてテキストサイズが自動的に調整されます。

<div className='flex items-center justify-evenly mb-2 cursor-pointer p-4 text-slate-100 hover:bg-slate-700 duration-150 rounded-md'>
  <BiLogOut/>
  <span className='text-[2vw] sm:text-base'>ログアウト</span>
</div>

ここでは、text-[2vw]クラスを使用してテキストサイズをビューポート幅の2%に設定し、sm:text-baseクラスを使用して小さい画面サイズでのテキストサイズをデフォルトのサイズに設定しています。

ただし、vw単位は画面が非常に大きい場合や非常に小さい場合に問題を引き起こす可能性があるため、適切な最小サイズと最大サイズを設定することをお勧めします。また、vw単位はブラウザの互換性に問題がある場合があるため、注意が必要です

------------------------------------------------------------



















*/