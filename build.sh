export DIR=proto
export OUT_DIR=../clientjs

cd $DIR

rm -Rf $OUT_DIR
mkdir $OUT_DIR

protoc -I=. *.proto \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
