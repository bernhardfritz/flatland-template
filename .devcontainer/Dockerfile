FROM tinygo/tinygo:0.41.1

COPY first-run-notice.txt /usr/local/etc/vscode-dev-containers/
COPY rc_snippet.sh /home/tinygo/.rc_snippet.sh

RUN echo 'test -f ~/.rc_snippet.sh && source "$_"' >> ~/.bashrc